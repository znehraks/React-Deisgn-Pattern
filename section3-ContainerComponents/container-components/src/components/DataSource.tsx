import React, { useEffect, useState } from "react";
import { UserInfoProps } from "./UserInfo";
import { BookType, UserType } from "../@types";

type ResourceLoaderProps = {
  getData: () => Promise<UserType | BookType | string>;
  resourceName: string;
  children: React.ReactElement<UserInfoProps>;
};
export const DataSource = ({
  getData,
  resourceName,
  children,
}: ResourceLoaderProps) => {
  const [resource, setResource] = useState<unknown | null>(null);
  useEffect(() => {
    (async () => {
      setResource(await getData());
    })();
  }, [getData]);

  if (!resource) return null;
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

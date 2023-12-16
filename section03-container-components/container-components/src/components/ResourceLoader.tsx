import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserInfoProps } from "./UserInfo";
import { UserType } from "../@types";

type ResourceLoaderProps = {
  resourceUrl: string;
  resourceName: string;
  children: React.ReactElement<UserInfoProps>;
};
export const ResourceLoader = ({
  resourceUrl,
  resourceName,
  children,
}: ResourceLoaderProps) => {
  const [resource, setResource] = useState<UserType | null>(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:9090/${resourceUrl}`);
      console.log(response);
      setResource(response.data);
    })();
  }, [resourceUrl]);

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

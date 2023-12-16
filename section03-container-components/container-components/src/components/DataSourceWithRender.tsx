import React, { useEffect, useState } from "react";
import { UserInfoProps } from "./UserInfo";
import { BookType, UserType } from "../@types";

type ResourceLoaderProps = {
  getData: () => Promise<UserType | BookType | string>;
  render: (
    resource: UserType | BookType | string
  ) => React.ReactElement<UserInfoProps>;
};
export const DataSourceWithRender = ({
  getData,
  render,
}: ResourceLoaderProps) => {
  const [resource, setResource] = useState<UserType | BookType | string | null>(
    null
  );
  useEffect(() => {
    (async () => {
      setResource(await getData());
    })();
  }, [getData]);

  if (!resource) return null;
  return render(resource);
};

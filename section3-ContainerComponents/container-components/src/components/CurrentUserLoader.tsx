import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserInfoProps } from "./UserInfo";

type CurrentUserLoaderProps = {
  children: React.ReactNode;
};
export const CurrentUserLoader = ({ children }: CurrentUserLoaderProps) => {
  const [user, setUser] = useState<UserInfoProps["user"]>();
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:9090/current-user");
      setUser(response.data);
    })();
  }, []);
  if (!user) return null;
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
      })}
    </>
  );
};

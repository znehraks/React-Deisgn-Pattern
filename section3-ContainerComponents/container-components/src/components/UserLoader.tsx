import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserInfoProps } from "./UserInfo";
import { UserType } from "../@types";

type CurrentUserLoaderProps = {
  userId: string | number;
  children: React.ReactElement<UserInfoProps>;
};
export const UserLoader = ({ userId, children }: CurrentUserLoaderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:9090/users/${userId}`);
      console.log(response);
      setUser(response.data);
    })();
  }, [userId]);

  if (!user) return null;
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

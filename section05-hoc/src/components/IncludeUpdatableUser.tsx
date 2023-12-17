import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserType } from "./UserInfo";

export const includeUpdatableUser = <P extends object>(
  Component: React.ComponentType<P>,
  userId: string | number
) => {
  return (props: P) => {
    const [initialUser, setInitialUser] = useState<UserType | null>(null);
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `http://localhost:9090/users/${userId}`
        );
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (updates: UserType) => {
      setUser((prev) => ({ ...prev, ...updates }));
    };

    const onPostUser = async () => {
      const response = await axios.post(
        `http://localhost:9090/users/${userId}`,
        { user }
      );
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};

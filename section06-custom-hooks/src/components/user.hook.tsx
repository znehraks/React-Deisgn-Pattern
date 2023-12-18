import axios from "axios";
import { useEffect, useState } from "react";
import { UserType } from "./UserInfo";

export const useUser = (userId: string) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      setUser((await axios.get(`http://localhost:9090/users/${userId}`)).data);
    })();
  }, [userId]);

  return user;
};

import axios from "axios";
import { useEffect, useState } from "react";
import { UserType } from "./UserInfo";

export const useCurrentUser = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      setUser((await axios.get("http://localhost:9090/current-user")).data);
    })();
  }, []);

  return user;
};

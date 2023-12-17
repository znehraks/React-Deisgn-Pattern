import axios from "axios";
import { useEffect, useState } from "react";

export const includeUser = <P extends object>(
  Component: React.ComponentType<P>,
  userId: string | number
) => {
  return (props: P) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        setUser(
          (await axios.get(`http://localhost:9090/users/${userId}`)).data
        );
      })();
    }, []);
    return <Component {...props} user={user} />;
  };
};

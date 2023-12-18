import axios from "axios";
import { useEffect, useState } from "react";
import { UserType } from "./UserInfo";
import { BookType } from "./BookInfo";

export const useResource = (resourceUrl: string) => {
  const [resource, setResource] = useState<UserType | BookType | null>(null);

  useEffect(() => {
    (async () => {
      setResource((await axios.get(resourceUrl)).data);
    })();
  }, [resourceUrl]);

  return resource;
};

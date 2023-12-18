import { useEffect, useState } from "react";
import { UserType } from "./UserInfo";
import { BookType } from "./BookInfo";

export const useDataResource = (
  getData: () => Promise<UserType | BookType | string | null>
) => {
  const [resource, setResource] = useState<UserType | BookType | string | null>(
    null
  );

  useEffect(() => {
    (async () => {
      setResource(await getData());
    })();
  }, [getData]);

  return resource;
};

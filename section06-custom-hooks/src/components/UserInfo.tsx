import axios from "axios";
import { useDataResource } from "./DataSource";
import { BookType } from "./BookInfo";

export type UserType = {
  isUser: true;
  id?: string | number;
  name: string;
  age: number;
  country: string;
  books: string[];
};
export type UserInfoProps = {
  user?: UserType;
};

const fetchFromServer = (resourceUrl: string) => async () => {
  return (await axios.get<UserType | BookType | null>(resourceUrl))?.data;
};

const getFromLocalStorage = (key: string) => () => {
  return localStorage.getItem(key);
};
export const UserInfo = ({ resourceUrl }: { resourceUrl: string }) => {
  const user = useDataResource(fetchFromServer(resourceUrl));
  const message = useDataResource(getFromLocalStorage("test"));
  if (!user) return <h2>Loading...</h2>;
  if (!("books" in user)) return <h2>loading...</h2>;
  const { name, age, country, books } = user || {};
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{country}</h2>

      <h1>{message}</h1>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

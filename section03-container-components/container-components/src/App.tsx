// import { CurrentUserLoader } from "./components/CurrentUserLoader";
import axios from "axios";
// import { BookInfo } from "./components/BookInfo";
import { DataSource } from "./components/DataSource";
// import { ResourceLoader } from "./components/ResourceLoader";
import { UserInfo } from "./components/UserInfo";
// import { UserLoader } from "./components/UserLoader";
import { BookType, UserType } from "./@types";
import { BookInfo } from "./components/BookInfo";
import { DataSourceWithRender } from "./components/DataSourceWithRender";

const getDataFromServer = async (url: string) => {
  return (await axios.get(`http://localhost:9090${url}`)).data as
    | UserType
    | BookType
    | string;
};

const getDataFromLocalStorage = async (key: string) => {
  return localStorage.getItem(key) ?? "";
};

const Message = ({ message }: { message?: string }) => <h1>{message}</h1>;
function App() {
  return (
    <>
      {/* <CurrentUserLoader>
        <UsertInfo />
      </CurrentUserLoader> */}

      {/* <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl={"users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={"books/1"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader> */}

      <DataSource
        getData={() => getDataFromServer("/users/2")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getData={() => getDataFromServer("/books/2")}
        resourceName="book"
      >
        <BookInfo />
      </DataSource>
      <DataSourceWithRender
        getData={() => getDataFromServer("/users/1")}
        render={(resource) => <UserInfo user={resource as UserType} />}
      />

      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName="message"
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;

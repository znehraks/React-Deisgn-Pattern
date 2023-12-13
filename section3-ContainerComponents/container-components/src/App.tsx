// import { CurrentUserLoader } from "./components/CurrentUserLoader";
import { BookInfo } from "./components/BookInfo";
import { ResourceLoader } from "./components/ResourceLoader";
import { UserInfo } from "./components/UserInfo";
import { UserLoader } from "./components/UserLoader";

function App() {
  return (
    <>
      {/* <CurrentUserLoader>
        <UsertInfo />
      </CurrentUserLoader> */}

      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl={"users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={"books/1"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;

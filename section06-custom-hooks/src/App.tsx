import { BookInfo } from "./components/BookInfo";
import { UserInfo } from "./components/UserInfo";

function App() {
  return (
    <>
      <UserInfo resourceUrl="http://localhost:9090/users/1" />
      <UserInfo resourceUrl="http://localhost:9090/users/2" />
      <UserInfo resourceUrl="http://localhost:9090/users/3" />

      <BookInfo bookId="1" />
      <BookInfo bookId="2" />
      <BookInfo bookId="3" />
    </>
  );
}

export default App;

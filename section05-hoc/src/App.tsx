import { includeUser } from "./components/IncludeUser";
import { logProps } from "./components/LogProps";
import { UserInfo } from "./components/UserInfo";
import { UserInfoForm } from "./components/UserForm";

const UserInfoWrapper = logProps(UserInfo);
const UserInfoWithLoader = includeUser(UserInfo, "1");
function App() {
  return (
    <>
      <UserInfoWrapper
        user={{ name: "hi", age: 20, country: "Kr", books: [] }}
      />
      <br />
      <UserInfoWithLoader />
      <br />
      <UserInfoForm />
    </>
  );
}

export default App;

import { CurrentUserLoader } from "./components/CurrentUserLoader";
import { UsertInfo } from "./components/UserInfo";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UsertInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;

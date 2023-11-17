import { SplitScreen } from "./components/SplitScreen";

function App() {
  return (
    <>
      <SplitScreen leftWidth={2} rightWidth={1}>
        <LeftSide title="왼쪽" />
        <RightSide title="오른쪽" />
      </SplitScreen>
    </>
  );
}

interface ISideProps {
  title: string;
}
const LeftSide = ({ title }: ISideProps) => {
  return <div>{title}</div>;
};

const RightSide = ({ title }: ISideProps) => {
  return <div>{title}</div>;
};

export default App;

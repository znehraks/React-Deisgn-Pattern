import { RedButton, SmallRedButton } from "./components/Partial";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};
function App() {
  return (
    <>
      {/* <RecursiveComponent data={myNestedObject} />
      <RedButton text="It's raining man!" />
      <GreenSmallButton text="Hallelujah! It's raining man!" /> */}
      <RedButton text={"hihi"} />
      <SmallRedButton text={"hihihi"} />
    </>
  );
}

export default App;

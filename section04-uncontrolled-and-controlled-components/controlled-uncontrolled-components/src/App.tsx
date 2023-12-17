/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ControlledForm } from "./components/ControlledForm";
// import { UnControlledModal } from "./components/UnControlledModal";
// import { ControlledModal } from "./components/ControlledModal";
// import { UnControlledForm } from "./components/UnControlledForm";
// import { useState } from "react";
import { UnControlledFlow } from "./components/UnControlledFlow";

type StepProps = { goNext?: (dataFromStep: any) => void };
const StepOne = ({ goNext }: StepProps) => {
  return (
    <>
      <h1>step #1</h1>
      <button onClick={() => goNext?.({ name: "MyName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }: StepProps) => {
  return (
    <>
      <h1>step #2</h1>
      <button onClick={() => goNext?.({ age: 20 })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }: StepProps) => {
  return (
    <>
      <h1>step #3</h1>
      <button onClick={() => goNext?.({ country: "Korea" })}>Next</button>
    </>
  );
};
function App() {
  // const [show, setShow] = useState(false);
  return (
    <>
      {/* <UnControlledForm />
      <ControlledForm />
      <UnControlledModal>
        <h1>uncontrolled modal</h1>
      </UnControlledModal>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide Modal" : "Show Modal"}
      </button>
      <ControlledModal show={show} onClose={() => setShow(false)}>
        <h1>!!!!!controlled modal</h1>
      </ControlledModal> */}
      <UnControlledFlow
        onDone={(data) => {
          console.log(data);
          alert("Yi !!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnControlledFlow>
    </>
  );
}

export default App;

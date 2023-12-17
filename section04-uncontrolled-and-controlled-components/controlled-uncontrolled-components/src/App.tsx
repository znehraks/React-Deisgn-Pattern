// import { ControlledForm } from "./components/ControlledForm";
// import { UnControlledModal } from "./components/UnControlledModal";
// import { ControlledModal } from "./components/ControlledModal";
// import { UnControlledForm } from "./components/UnControlledForm";
// import { useState } from "react";
import { UnControlledFlow } from "./components/UnControlledFlow";

type StepProps = { goNext: () => void };
const StepOne = ({ goNext }: StepProps) => {
  return (
    <>
      <h1>step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }: StepProps) => {
  return (
    <>
      <h1>step #2</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }: StepProps) => {
  return (
    <>
      <h1>step #3</h1>
      <button onClick={goNext}>Next</button>
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
      <UnControlledFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnControlledFlow>
    </>
  );
}

export default App;

/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ControlledForm } from "./components/ControlledForm";
// import { UnControlledModal } from "./components/UnControlledModal";
// import { ControlledModal } from "./components/ControlledModal";
// import { UnControlledForm } from "./components/UnControlledForm";
// import { useState } from "react";
import { useState } from "react";
import { UnControlledFlow } from "./components/UnControlledFlow";
import { ControlledFlow } from "./components/ControlledFlow";

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
      <button onClick={() => goNext?.({ age: 23 })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }: StepProps) => {
  return (
    <>
      <h1>step #3</h1>
      <button onClick={() => goNext?.({})}>Next</button>
    </>
  );
};

const StepFourth = ({ goNext }: StepProps) => {
  return (
    <>
      <h1>step #4</h1>
      <button onClick={() => goNext?.({ country: "Korea" })}>Next</button>
    </>
  );
};
function App() {
  // const [show, setShow] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<{ [key: string]: any }>({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep: any) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex((prev) => prev + 1);
  };

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

      <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 ? <StepThree /> : null}
        <StepFourth />
      </ControlledFlow>
    </>
  );
}

export default App;

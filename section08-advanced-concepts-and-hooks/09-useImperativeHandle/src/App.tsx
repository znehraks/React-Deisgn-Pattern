import { useRef } from "react";
import "./App.css";
import { Input } from "./input";

function App() {
  const inputRef = useRef();

  return (
    <>
      <Input ref={inputRef} />
      <button
        type="submit"
        className="button"
        onClick={() => console.log(inputRef.current.value)}
      >
        Submit
      </button>
    </>
  );
}

export default App;

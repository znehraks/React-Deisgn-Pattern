import React from "react";
import { useRef } from "react";
import { Input } from "./input";

function App() {
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef} />
      <button type="submit" className="button">
        submit
      </button>
    </form>
  );
}
export default App;

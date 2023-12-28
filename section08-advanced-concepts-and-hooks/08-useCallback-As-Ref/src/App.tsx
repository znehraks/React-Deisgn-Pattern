import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useCallback((input: HTMLInputElement) => {
    input?.focus();
  }, []);

  useEffect(() => {
    // inputRef.current.focus();
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setShowInput((s) => !s);
        }}
      >
        Switch
      </button>
      {showInput && <input ref={inputRef} />}
    </>
  );
}

export default App;

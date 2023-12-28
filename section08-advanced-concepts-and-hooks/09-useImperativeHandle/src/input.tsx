import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const CustomInput = (props, ref) => {
  const [value, setValue] = useState("");
  useImperativeHandle(
    ref,
    () => {
      return {
        value,
      };
    },
    [value]
  );
  return (
    <>
      <input
        {...props}
        className="text-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </>
  );
};

export const Input = forwardRef(CustomInput);

import { useRef } from "react";

export const UnControlledForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value);
    console.log(ageInputRef.current?.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value={"Submit"} />
    </form>
  );
};

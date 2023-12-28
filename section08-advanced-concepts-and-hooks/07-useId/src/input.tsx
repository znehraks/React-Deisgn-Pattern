import { useId, useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        id={`${id}-email`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="email">Name</label>
      <input
        id={`${id}-name`}
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Form;

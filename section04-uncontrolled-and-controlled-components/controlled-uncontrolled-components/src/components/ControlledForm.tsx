import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();

  useEffect(() => {
    if (name.length < 3) {
      console.log("Name Cannot be empty");
      setError("Name Cannot be empty");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <button>submit</button>
    </form>
  );
};

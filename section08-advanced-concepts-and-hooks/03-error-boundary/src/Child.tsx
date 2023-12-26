import { useEffect } from "react";

export const Child = () => {
  //   throw new Error("Error in Component that would be caught");
  useEffect(() => {
    fetch("/").then(() => {
      throw new Error("Error in Component that would not be caught");
    });
  });
  return <h1>Child Component</h1>;
};

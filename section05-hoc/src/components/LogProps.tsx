import React from "react";

export const logProps = <P extends object>(
  Component: React.ComponentType<P>
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: P) => {
    console.log("props", props);
    return <Component {...props} />;
  };
};

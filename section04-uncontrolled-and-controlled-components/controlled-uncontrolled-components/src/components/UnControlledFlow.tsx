import React, { useState } from "react";

type UnControlledFlowProps = {
  children: React.ReactElement<{ goNext: () => void }>;
  onDone: () => void;
};
export const UnControlledFlow = ({
  children,
  onDone,
}: UnControlledFlowProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<{ [key: string]: any }>({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = () => {
    setCurrentStepIndex((prev) => prev + 1);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement<{ goNext: () => void }>(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};

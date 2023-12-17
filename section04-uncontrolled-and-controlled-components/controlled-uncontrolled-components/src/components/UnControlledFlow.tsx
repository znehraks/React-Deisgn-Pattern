/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

type UnControlledFlowProps = {
  children: React.ReactElement<{ goNext: (dataFromStep: any) => void }>[];
  onDone: (newData: any) => void;
};
export const UnControlledFlow = ({
  children,
  onDone,
}: UnControlledFlowProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<{ [key: string]: any }>({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep: any) => {
    const nextStepIndex = currentStepIndex + 1;

    const newData = { ...data, ...dataFromStep };

    console.log("newData", newData);

    if (nextStepIndex < children.length) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      onDone(newData);
    }
    setData(newData);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (
    React.isValidElement<{ goNext: (dataFromStep: any) => void }>(currentChild)
  ) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};

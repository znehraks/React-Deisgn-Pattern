/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type ControlledFlowProps = {
  children:
    | (React.ReactElement<{ goNext: (dataFromStep: any) => void }> | null)[];
  currentIndex: number;
  onNext: (dataFromStep: any) => void;
};
export const ControlledFlow = ({
  children,
  currentIndex,
  onNext,
}: ControlledFlowProps) => {
  const goNext = (dataFromStep: { [key: string]: any }) => {
    onNext(dataFromStep);
  };
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (
    React.isValidElement<{ goNext: (dataFromStep: any) => void }>(currentChild)
  ) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};

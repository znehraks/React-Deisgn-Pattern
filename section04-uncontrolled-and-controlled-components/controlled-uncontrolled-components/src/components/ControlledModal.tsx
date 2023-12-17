import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000070;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

interface IModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const ControlledModal = ({ show, onClose, children }: IModalProps) => {
  return (
    <>
      {show && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

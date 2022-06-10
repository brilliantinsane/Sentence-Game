import React from "react";
import "./Step.css";

interface IStep {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
  answer: string;
  skipped: boolean;
}

const Step: React.FC<IStep> = ({
  children,
  onClick,
  active,
  answer,
  skipped,
}) => {
  const stepClass = `step flex-column flex-center${active ? " active" : ""}${
    skipped ? " skipped" : !answer ? "" : " answered"
  }`;
  return (
    <div className={stepClass} onClick={onClick}>
      {children}
    </div>
  );
};

export default Step;

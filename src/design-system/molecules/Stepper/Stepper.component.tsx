import React from "react";
import { useDispatch } from "react-redux";
import { IQuestion, jumpToQuestion } from "../../../redux/questionsSlice";
import { RootState, useSelector } from "../../../redux/store";
import Step from "../../atoms/Step";
import "./Stepper.css";

interface IStepper {
  handleChangeStep: () => void;
}

const Stepper: React.FC<IStepper> = ({ handleChangeStep }) => {
  const dispatch = useDispatch();
  const { currentQuestion, questionList } = useSelector(
    (state: RootState) => state.questions
  );
  const handleStepClick = (question: number) => {
    handleChangeStep();
    dispatch(jumpToQuestion(question));
  };
  return (
    <div className="stepper flex-row">
      {questionList.map((question: IQuestion, index: number) => (
        <Step
          key={index}
          active={currentQuestion === index}
          answer={question.answer}
          skipped={question.skipped}
          onClick={() => handleStepClick(index)}
        >
          {index + 1}
        </Step>
      ))}
    </div>
  );
};

export default Stepper;

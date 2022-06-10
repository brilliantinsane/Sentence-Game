import React, { ChangeEvent, KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { nextQuestion, setAnswer } from "../../../redux/questionsSlice";
import { RootState, useSelector } from "../../../redux/store";
import CustomInput from "../../atoms/CustomInput";
import CustomPopup from "../../molecules/CustomPopup";
import Stepper from "../../molecules/Stepper";
import MainTemplate from "../../organisms/MainTemplate";
import "./Playground.css";

const Playground: React.FC = () => {
  const dispatch = useDispatch();
  const { questionList, currentQuestion, isPopupOpen } = useSelector(
    (state: RootState) => state.questions
  );

  const handleChangeStep = () => {
    dispatch(
      setAnswer({
        question: currentQuestion,
        answer: questionList[currentQuestion].answer,
        skipped: questionList[currentQuestion].answer === "",
      })
    );
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAnswer({
        question: currentQuestion,
        answer: e.target.value,
        skipped: false,
      })
    );
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(
        setAnswer({
          question: currentQuestion,
          answer: questionList[currentQuestion].answer,
          skipped: questionList[currentQuestion].answer === "",
        })
      );
      dispatch(nextQuestion());
    }
  };

  return (
    <MainTemplate
      header
      footer
      footerProps={{
        handleChangeStep,
      }}
    >
      <Stepper handleChangeStep={handleChangeStep} />
      <h1 className="question">{questionList[currentQuestion].question}</h1>
      <CustomInput
        value={questionList[currentQuestion].answer}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {isPopupOpen && <CustomPopup />}
    </MainTemplate>
  );
};

export default Playground;

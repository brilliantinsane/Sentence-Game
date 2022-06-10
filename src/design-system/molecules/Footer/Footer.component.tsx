import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  IQuestion,
  nextQuestion,
  previousQuestion,
  openPopup,
  clearResults,
} from "../../../redux/questionsSlice";
import { RootState, useSelector } from "../../../redux/store";
import Button from "../../atoms/Button";
import { IFooterProps } from "../../organisms/MainTemplate/MainTemplate.component";
import "./Footer.css";

const Footer: React.FC<IFooterProps> = ({ handleChangeStep, resultsPage }) => {
  const dispatch = useDispatch();
  const { questionList, currentQuestion } = useSelector(
    (state: RootState) => state.questions
  );
  const lastQuestionCondition = currentQuestion === questionList.length - 1;
  const allQuestionsAnswered = questionList.every(
    (question: IQuestion) => !!question.answer
  );
  const handlePrev = () => {
    handleChangeStep?.();
    dispatch(previousQuestion());
  };
  const handleNext = () => {
    handleChangeStep?.();
    if (allQuestionsAnswered) {
      dispatch(openPopup(true));
    } else {
      dispatch(nextQuestion());
    }
  };
  const handleClearResults = () => {
    localStorage.removeItem("results");
    dispatch(clearResults());
  };
  return (
    <footer className="footer">
      {resultsPage ? (
        <>
          <Button className="capitalize" onClick={handleClearResults}>
            Clear Results
          </Button>
          <Button className="capitalize btn-link">
            <Link to="/">Play Again</Link>
          </Button>
        </>
      ) : (
        <>
          <Button
            className="capitalize"
            onClick={() => handlePrev()}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => handleNext()}
            disabled={
              lastQuestionCondition &&
              questionList.some((question: IQuestion) => question.answer === "")
            }
          >
            {allQuestionsAnswered ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </footer>
  );
};

export default Footer;

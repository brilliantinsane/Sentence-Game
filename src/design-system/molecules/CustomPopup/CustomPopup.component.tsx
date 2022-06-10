import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openPopup, submitResult } from "../../../redux/questionsSlice";
import { RootState, useSelector } from "../../../redux/store";
import Button from "../../atoms/Button";
import "./CustomPopup.css";

const CustomPopup: React.FC = () => {
  const dispatch = useDispatch();
  const { questionList, sequence, results } = useSelector(
    (state: RootState) => state.questions
  );
  const finalAnswer = sequence
    .map((seq: number) => questionList[seq]?.answer ?? "")
    .join(" ");
  const handleSubmitResults = () => {
    const finalResults = [...results];
    finalResults.push(finalAnswer);
    dispatch(submitResult(finalResults));
    localStorage.setItem("results", JSON.stringify(finalResults));
  };
  return (
    <div className="custom-popup flex-column flex-center">
      <div className="popup">
        <div className="popup-content">
          <h1>Are you sure?</h1>
        </div>
        <div className="popup-footer flex-row flex-center">
          <Button
            className="capitalize no"
            onClick={() => dispatch(openPopup(false))}
          >
            No
          </Button>
          <Button
            className="capitalize yes btn-link"
            onClick={handleSubmitResults}
          >
            <Link to="/results">Yes</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;

import React from "react";
import { useDispatch } from "react-redux";
import { clearResults, resetGame } from "../../../../../redux/questionsSlice";
import Button from "../../../../atoms/Button";
import LinkButton from "../../../../atoms/LinkButton";

const ResultButtons: React.FC = () => {
  const dispatch = useDispatch();
  const handleClearResults = () => {
    localStorage.removeItem("results");
    dispatch(clearResults());
  };
  return (
    <>
      <Button className="capitalize" onClick={handleClearResults}>
        Clear Results
      </Button>
      <LinkButton to="/playground" onClick={() => dispatch(resetGame())}>
        Play again
      </LinkButton>
    </>
  );
};

export default ResultButtons;

import React from "react";
import { useDispatch } from "react-redux";
import { resetGame } from "../../../../../redux/questionsSlice";
import LinkButton from "../../../../atoms/LinkButton";

const InstructionButtons: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <LinkButton to="/">Back</LinkButton>
      <LinkButton to="/playground" onClick={() => dispatch(resetGame())}>
        Lets play!
      </LinkButton>
    </>
  );
};

export default InstructionButtons;

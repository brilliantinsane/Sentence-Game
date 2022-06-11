import { useDispatch } from "react-redux";
import {
  IQuestion,
  nextQuestion,
  openPopup,
  previousQuestion,
} from "../../../redux/questionsSlice";
import { RootState, useSelector } from "../../../redux/store";
import Button from "../../atoms/Button";
import {
  FooterPage,
  IFooterProps,
} from "../../organisms/MainTemplate/MainTemplate.component";
import InstructionButtons from "./components/InstructionButtons";
import ResultButtons from "./components/ResultButtons";

export const useFooterButtons = ({
  footerPage,
  handleChangeStep,
}: IFooterProps) => {
  const dispatch = useDispatch();
  const { questionList, currentQuestion } = useSelector(
    (state: RootState) => state.questions
  );
  let FooterButtons = null;
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
  switch (footerPage) {
    case FooterPage.INSTRUCTIONS:
      FooterButtons = <InstructionButtons />;
      break;
    case FooterPage.RESULTS:
      FooterButtons = <ResultButtons />;
      break;
    default:
      FooterButtons = (
        <>
          <Button
            className="capitalize"
            onClick={() => handlePrev()}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            className="capitalize"
            onClick={() => handleNext()}
            disabled={
              lastQuestionCondition &&
              questionList.some((question: IQuestion) => question.answer === "")
            }
          >
            {allQuestionsAnswered ? "Finish" : "Next"}
          </Button>
        </>
      );
  }

  return FooterButtons;
};

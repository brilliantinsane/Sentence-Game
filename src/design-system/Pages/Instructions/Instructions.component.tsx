import React from "react";
import MainTemplate from "../../organisms/MainTemplate";
import { FooterPage } from "../../organisms/MainTemplate/MainTemplate.component";
import "./Instructions.css";

const Instructions: React.FC = () => {
  return (
    <MainTemplate
      header
      footer
      footerProps={{ footerPage: FooterPage.INSTRUCTIONS }}
    >
      <h1 className="instructions-title">Instructions</h1>
      <div className="full-height flex-column scroll-y">
        <p className="instructions-paragraph">You will be asked 4 questions:</p>
        <ul className="instructions-questions">
          <li className="instruction-question">Who?</li>
          <li className="instruction-question">What?</li>
          <li className="instruction-question">When?</li>
          <li className="instruction-question">Where</li>
        </ul>
        <p className="instructions-paragraph">
          Upon finishing the survey you will be taken to the results page where
          you will see latest result but also, all the previous ones.
        </p>

        <p className="instructions-paragraph">
          You can use numbers indicator at the top of the page (just below
          header) to navigate through questions or Previous and Next buttons at
          the very bottom of the page. If you skip a question, meaning you don't
          provie an answer, that question will be flagged with red mark
          indicating a missing anwser. Finishing the game won't be possible
          without answering all four questions. Conveniently, answered questions
          will be marked with green color indicating an answered question.
        </p>
        <p className="instructions-paragraph">
          The sequence in which the sentence will be constructed is as follows:{" "}
          <span className="capitalize">__who__what__where__when__</span>.
        </p>
        <h2 className="example-title">Example</h2>
        <ul className="instructions-questions">
          <li className="instruction-question">Who? - Mark</li>
          <li className="instruction-question">What? - is coding</li>
          <li className="instruction-question">When? - today</li>
          <li className="instruction-question">Where? - on his computer</li>
        </ul>
        <p className="instructions-paragraph">
          Will display: Mark is coding on his computed today
        </p>
        <p className="instructions-paragraph">Enjoy and have fun!</p>
      </div>
    </MainTemplate>
  );
};

export default Instructions;

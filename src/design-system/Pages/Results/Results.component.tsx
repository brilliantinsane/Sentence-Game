import React from "react";
import { RootState, useSelector } from "../../../redux/store";
import MainTemplate from "../../organisms/MainTemplate";
import { FooterPage } from "../../organisms/MainTemplate/MainTemplate.component";
import "./Results.css";

const Results: React.FC = () => {
  const { results } = useSelector((state: RootState) => state.questions);
  const latestAnswer = results[results.length - 1];
  const previousAnswers = results
    .filter((answer: string) => answer !== latestAnswer)
    .reverse();
  const showPreviousAnswers = previousAnswers.length >= 1;
  return (
    <MainTemplate
      header
      footer
      footerProps={{ footerPage: FooterPage.RESULTS }}
    >
      {!!results.length ? (
        <>
          <h1 className="results-title">Latest result:</h1>
          <span className="result">{latestAnswer}</span>
          {showPreviousAnswers && (
            <h1 className="results-title previous">Previous results:</h1>
          )}
          {showPreviousAnswers && (
            <div className="full-height flex-column">
              {previousAnswers.map((answer: string, index: number) => (
                <span key={index} className="result">
                  {index + 1}: {answer}
                </span>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="scroll-y full-height flex-column flex-center">
          <h1 className="results-title">No Results</h1>
        </div>
      )}
    </MainTemplate>
  );
};

export default Results;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetGame } from "../../../redux/questionsSlice";
import { RootState } from "../../../redux/store";
import PlayButton from "../../atoms/PlayButton";
import MainTemplate from "../../organisms/MainTemplate";
import "./Home.css";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { results } = useSelector((state: RootState) => state.questions);
  useEffect(() => {
    dispatch(resetGame());
  }, [dispatch]);
  return (
    <MainTemplate header>
      <h1 className="welcome-title">Welcome to the Sentence Game!</h1>
      <span className="intro">
        You can try and play right away or you can check the instructions{" "}
        <Link to="/instructions">here</Link> first.
      </span>
      <div className="full-height flex-column flex-center">
        <PlayButton />
      </div>
      {!!results.length && (
        <span className="intro">
          See previous <Link to="/results">results</Link>.
        </span>
      )}
    </MainTemplate>
  );
};

export default Home;

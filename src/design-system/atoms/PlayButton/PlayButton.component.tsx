import React from "react";
import { Link } from "react-router-dom";
import "./PlayButton.css";

const PlayButton: React.FC = () => {
  return (
    <Link to="/playground">
      <button className="btn btn-play">Play!</button>
    </Link>
  );
};

export default PlayButton;

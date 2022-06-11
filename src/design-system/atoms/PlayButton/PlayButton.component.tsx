import React from "react";
import LinkButton from "../LinkButton";
import "./PlayButton.css";

const PlayButton: React.FC = () => {
  return (
    <LinkButton className="btn-play" to="/playground">
      Play!
    </LinkButton>
  );
};

export default PlayButton;

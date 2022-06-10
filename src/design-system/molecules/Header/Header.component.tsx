import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header flex-row flex-center">
      <Link to="/">
        <div className="logo">
          W<span className="logo-small">x4</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;

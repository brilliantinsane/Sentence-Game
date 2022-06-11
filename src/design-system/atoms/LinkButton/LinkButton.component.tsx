import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

interface ILinkButton {
  onClick?: () => void;
  to: string;
  children: React.ReactNode;
  className?: string;
}

const LinkButton: React.FC<ILinkButton> = ({
  onClick,
  to,
  children,
  className,
}) => {
  const linkBtnClass = `no-padding capitalize btn-link${
    className ? ` ${className}` : ""
  }`;
  return (
    <Button className={linkBtnClass} onClick={onClick}>
      <Link to={to}>{children}</Link>
    </Button>
  );
};

export default LinkButton;

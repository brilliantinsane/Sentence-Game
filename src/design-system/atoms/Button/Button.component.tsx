import React from "react";
import "./Button.css";

interface IButton {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  className,
  children,
  onClick,
  disabled = false,
}) => {
  const btnClass = `btn btn-navigation${className ? ` ${className}` : ""}`;
  return (
    <button onClick={onClick} className={btnClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

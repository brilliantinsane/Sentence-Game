import React, { ChangeEventHandler, KeyboardEventHandler, useRef } from "react";
import "./CustomInput.css";

interface ICustomInput {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

const CustomInput: React.FC<ICustomInput> = ({
  value,
  onChange,
  onKeyDown,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  if (inputRef && inputRef.current) {
    inputRef.current.focus();
  }
  const validate = () => {
    if (inputRef && inputRef.current) {
      if (/^\s/.test(inputRef.current.value)) {
        inputRef.current.value = "";
      }
    }
  };
  return (
    <input
      className="custom-input"
      ref={inputRef}
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      placeholder="Your answer here"
      autoFocus
      onInput={validate}
    />
  );
};

export default CustomInput;

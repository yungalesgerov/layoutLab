import React, { useState } from "react";
import "./index.css";

import valid from "../../assets/Vector3.svg";
import wrong from "../../assets/Vector1.svg";

interface FloatingLabelInputProps {
  label: string;
  type: string;
  helperText?: string;
  validate?: (value: string) => boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FloatingLabelInput = ({
  label,
  helperText,
  validate,
  type,
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleBlur = () => {
    if (validate) {
      setIsValid(validate(value));
    }
  };

  return (
    <div className="input-container">
      <input
        type={type}
        className={`input-field ${isValid === true ? "success" : ""} ${
          isValid === false ? "error" : ""
        }`}
        value={value}
        placeholder=""
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
      <label className="input-label">{label}</label>
      {isValid !== null && (
        <span
          className={`validation-icon ${
            isValid ? "success-icon" : "error-icon"
          }`}
        >
          {isValid ? (
            <img
              className="valid"
              src={valid}
              height={20}
              width={20}
              alt="valid icon"
            />
          ) : (
            <img
              className="valid"
              src={wrong}
              alt="wrong icon"
              height={20}
              width={20}
            />
          )}
        </span>
      )}
      {helperText && (
        <p className={`helper-text ${isValid === false ? "error" : ""}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

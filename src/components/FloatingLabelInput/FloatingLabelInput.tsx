import React, { useState } from "react";
import "./index.css";

interface FloatingLabelInputProps {
  label: string;
  helperText?: string;
  validate?: (value: string) => boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FloatingLabelInput = ({
  label,
  helperText,
  validate,
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleBlur = () => {
    setIsFocused(false);
    if (validate) {
      setIsValid(validate(value));
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className={`input-field ${isValid === true ? "success" : ""} ${
          isValid === false ? "error" : ""
        }`}
        value={value}
        placeholder=" "
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />
      <label className="input-label">{label}</label>
      {helperText && (
        <p className={`helper-text ${isValid === false ? "error" : ""}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

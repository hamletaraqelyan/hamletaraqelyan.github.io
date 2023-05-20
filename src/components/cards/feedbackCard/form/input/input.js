import React from "react";
import "./input.scss";

const Input = ({
  label,
  name,
  register,
  required,
  pattern,
  error,
  fullWidth = false,
}) => {
  return (
    <div className={`inputWrapper ${fullWidth ? "fullWidth" : ""}`}>
      <input
        {...register(name, { required, pattern })}
        placeholder=" "
        className={error?.type ? "error" : ""}
      />
      <label>
        {label}
        {required && <sup className="textCyan">*</sup>}
      </label>
    </div>
  );
};

export default Input;

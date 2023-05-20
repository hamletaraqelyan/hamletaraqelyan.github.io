import React from "react";
import "./textarea.scss";

const Textarea = ({ label, name, register, required, error }) => {
  return (
    <div className={`inputWrapper textareaWrapper`}>
      <textarea
        spellCheck="false"
        {...register(name, { required })}
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

export default Textarea;

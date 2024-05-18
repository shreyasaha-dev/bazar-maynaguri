import React from "react";
import "./input.css";
const Input = ({
  placeholder,
  value,
  name,
  onChange,
  onBlur,
  type = "text",
}) => {
  return (
    <div className="input">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

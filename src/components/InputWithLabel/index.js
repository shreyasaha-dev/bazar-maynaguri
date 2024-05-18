import React from "react";
import "./inputWithLabel.css";

const InputWithLabel = ({
  label,
  placeholder = "Enter here",
  isPasswordInput = false,
  value,
  onChange,
  onBlur,
  name,
}) => {
  return (
    <div className="input-section">
      <p>{label}</p>
      <input
        type={isPasswordInput ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputWithLabel;

import React from "react";
import "./textAreaWithLabel.css";

const TextAreaWithLabel = ({ label, name, value, onChange, onBlur }) => {
  return (
    <div className="input-section">
      <p>{label}</p>
      <textarea
        placeholder="Enter your description here..."
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextAreaWithLabel;

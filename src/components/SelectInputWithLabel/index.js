import React from "react";
import "./selectInputWithLabel.css";

const SelectInputWithLabel = ({ label, options, value, onChange }) => {
  return (
    <div className="input-section">
      <p>{label}</p>
      <select value={value} onChange={onChange}>
        <option value="">Select</option>
        {options?.map((item, i) => {
          return (
            <option value={item.value} key={i}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInputWithLabel;

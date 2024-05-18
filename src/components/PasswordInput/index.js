import React from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import "./passwordInput.css";
const PasswordInput = ({
  placeholder,
  value,
  name,
  onChange,
  onBlur,
  showPassword,
  hidePassword,
  showHidePassword,
}) => {
  return (
    <div className="input-password">
      <input
        type={showHidePassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {showHidePassword ? (
        <span onClick={hidePassword}>
          <IoMdEyeOff />
        </span>
      ) : (
        <span onClick={showPassword}>
          <IoEye />
        </span>
      )}
    </div>
  );
};

export default PasswordInput;

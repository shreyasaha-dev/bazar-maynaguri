import { Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import "./login.css";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/Reducers/userDataReducer";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../components/Footer";
const Login = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [showHidePassword, setShowHidePassword] = useState(false);
  const showPassword = () => {
    setShowHidePassword(true);
  };
  const hidePassword = () => {
    setShowHidePassword(false);
  };
  const dispatch = useDispatch();
  const submitForm = async (values, resetForm) => {
    // console.log(values);
    const payload = {
      params: {
        email: values.email,
        password: values.password,
      },
    };
    try {
      const response = await axios.post(
        "https://infowarescripts.com/dev/react-mechine-test/api/login",
        payload
      );
      console.log(response);
      if (response?.data?.result?.token) {
        dispatch(addToken(response?.data?.result?.token));
        resetForm();
      } else {
        toast(response?.data?.error?.meaning);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="total-login">
      <NavBar />
      <div className="login-mid-section">
        <div className="login-card">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .trim()
                .matches(emailRegex, "Invalid email address")
                .required("This field is mandatory"),
              password: yup.string().trim().required("This field is mandatory"),
            })}
            onSubmit={(values, { resetForm }) => {
              submitForm(values, resetForm);
            }}
          >
            {({ values, handleChange, handleSubmit, handleBlur }) => {
              return (
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <Input
                      placeholder="Email or mobile number"
                      value={values.email}
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="error-message">
                      <ErrorMessage name="email" />
                    </span>
                    <PasswordInput
                      placeholder="Password"
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      showPassword={showPassword}
                      hidePassword={hidePassword}
                      showHidePassword={showHidePassword}
                    />
                    <span className="error-message">
                      <ErrorMessage name="password" />
                    </span>
                    <button type="submit">Sign In</button>
                  </form>
                </div>
              );
            }}
          </Formik>
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create Account
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

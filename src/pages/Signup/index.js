import { Formik, ErrorMessage } from "formik";
import React, { useRef, useState } from "react";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import "./signup.css";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../store/Reducers/userDataReducer";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
const Signup = () => {
  const formikRef = useRef();
  const userToken = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [showHideConfirmPassword, setShowHideConfirmPassword] = useState(false);
  const submitForm = async (values, resetForm) => {
    const payload = {
      params: {
        name: values.name,
        email: values.email,
        phone: values.mobileNo,
        password: values.password,
        password_confirmation: values.confirmPassword,
      },
    };
    try {
      const response = await axios.post(
        "https://infowarescripts.com/dev/react-mechine-test/api/register",
        payload
      );
      console.log(response);
      if (response?.data?.result?.token) {
        dispatch(addToken(response?.data?.result?.token));
        resetForm();
      } else if (response?.data?.error?.email) {
        formikRef?.current?.setFieldError(
          "email",
          response?.data?.error?.email[0]
        );
      } else if (response?.data?.error?.phone) {
        formikRef?.current?.setFieldError(
          "mobileNo",
          response?.data?.error?.phone[0]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="total-signup">
      <NavBar />
      <div className="signup-mid-section">
        <div className="signup-card">
          <Formik
            initialValues={{
              name: "",
              email: "",
              mobileNo: "",
              password: "",
              confirmPassword: "",
            }}
            innerRef={formikRef}
            validationSchema={yup.object().shape({
              name: yup.string().trim().required("Full Name is mandatory"),
              email: yup
                .string()
                .trim()
                .matches(emailRegex, "Invalid email address")
                .required("Email is mandatory"),
              mobileNo: yup
                .string()
                .trim()
                .min(10, "Mobile no should be 10 digit")
                .max(10, "Mobile no should be 10 digit")
                .required("Mobile no is mandatory"),
              password: yup
                .string()
                .trim()
                .matches(passwordRegex, "Please enter valid password")
                .required("Password is mandatory"),
              confirmPassword: yup
                .string()
                .trim()
                .oneOf(
                  [yup.ref("password"), null],
                  "Both passwords are not same"
                )
                .required("Confirm Password is mandatory"),
            })}
            onSubmit={(values, { resetForm }) => {
              submitForm(values, resetForm);
            }}
          >
            {({ values, handleChange, handleSubmit, handleBlur }) => {
              return (
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <Input
                      placeholder="Full Name"
                      value={values.name}
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="error-message">
                      <ErrorMessage name="name" />
                    </span>
                    <Input
                      placeholder="Email"
                      value={values.email}
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="error-message">
                      <ErrorMessage name="email" />
                    </span>
                    <Input
                      placeholder="Mobile Number"
                      type="tel"
                      value={values.mobileNo}
                      name="mobileNo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="error-message">
                      <ErrorMessage name="mobileNo" />
                    </span>
                    <PasswordInput
                      placeholder="Password"
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      showPassword={() => {
                        setShowHidePassword(true);
                      }}
                      hidePassword={() => {
                        setShowHidePassword(false);
                      }}
                      showHidePassword={showHidePassword}
                    />
                    <span className="error-message">
                      <ErrorMessage name="password" />
                    </span>
                    <PasswordInput
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      showPassword={() => {
                        setShowHideConfirmPassword(true);
                      }}
                      hidePassword={() => {
                        setShowHideConfirmPassword(false);
                      }}
                      showHidePassword={showHideConfirmPassword}
                    />
                    <span className="error-message">
                      <ErrorMessage name="confirmPassword" />
                    </span>
                    <p>
                      By clicking Sign In or continue with Facebook or Google,
                      you agree to all <a href="">Terms of Service</a> and{" "}
                      <a href="">Privacy Policy</a>
                    </p>
                    <button type="submit">Sign Up</button>
                  </form>
                </div>
              );
            }}
          </Formik>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

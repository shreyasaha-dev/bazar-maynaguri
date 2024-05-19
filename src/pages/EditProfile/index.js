import React, { useEffect, useRef, useState } from "react";
import InputWithLabel from "../../components/InputWithLabel";
import "./editProfile.css";
import TextAreaWithLabel from "../../components/TextAreaWithLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectInputWithLabel from "../../components/SelectInputWithLabel";
import Select from "react-select";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import moment from "moment/moment";
import { addToken } from "../../store/Reducers/userDataReducer";
import { useNavigate } from "react-router-dom";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    fontSize: "14px",
    color: "gray",
    border: "1px solid #999999",
    borderRadius: "7px",
    marginBottom: "8px",
  }),
  input: (provided) => ({
    ...provided,
    fontSize: "14px",
    padding: "10.2px 0",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    paddingRight: "8px",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  clearIndicator: () => ({
    display: "none",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    padding: "2px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#000000",
  }),
};

const EditProfile = () => {
  const formikRef = useRef();
  const [showImage, setShowImage] = useState("");
  const inputImage = useRef(null);
  const [previewImage, setPreviewImage] = useState("");
  const countryOptions = [
    { label: "India", value: "1" },
    { label: "Australia", value: "2" },
    { label: "America", value: "3" },
  ];
  const [languages, setLanguages] = useState([]);
  const [country, setCountry] = useState([]);
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.userToken);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const navigate = useNavigate();
  const profileSidebarOptions = [
    {
      title: "Dashboard",
      img: require("../../images/dashboard.png"),
      count: 0,
      navigate: "/",
    },
    {
      title: "Edit Profile",
      img: require("../../images/edit profile.png"),
      count: 0,
      navigate: "",
    },
    {
      title: "My Order",
      img: require("../../images/my order.png"),
      count: 0,
      navigate: "",
    },
    {
      title: "My Favorite",
      img: require("../../images/my favorite.png"),
      count: 0,
      navigate: "",
    },
    {
      title: "Reviews",
      img: require("../../images/reviews.png"),
      count: 0,
      navigate: "",
    },
    {
      title: "Messages",
      img: require("../../images/messages.png"),
      count: 10,
      navigate: "",
    },
    {
      title: "Notifications",
      img: require("../../images/notifications.png"),
      count: 14,
      navigate: "",
    },
  ];
  const submitProfile = async (values, resetForm) => {
    console.log(values);
    const params = {
      name: values.name || undefined,
      email: values.email || undefined,
      phone: values.phone || undefined,
      gender: values.gender ? "M" : "F" || undefined,
      about_me: values.about || undefined,
      get_around_by: values.travel || undefined,
      date_of_birth: values.dob ? new Date(values.dob) : undefined,
      country_id: Number(values.country) || undefined,
      state: values.state || undefined,
      city: values.city || undefined,
      language_id:
        values.language.length > 0
          ? values.language.map((item) => String(item.value))
          : undefined,
      password: values.password || undefined,
      new_password: values.newPassword || undefined,
      confirm_password: values.confirmPassword || undefined,
    };
    const formData = new FormData();
    if (showImage) {
      formData.append("file", showImage);
    }
    try {
      const response = await axios.post(
        "https://infowarescripts.com/dev/react-mechine-test/api/edit-profile",
        formData,
        {
          params: params,
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response?.data?.userdata) {
        toast(response?.data?.result?.message);
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
      } else if (response?.data?.error?.password) {
        formikRef?.current?.setFieldError(
          "password",
          response?.data?.error?.password[0]
        );
      } else {
        toast(response?.data?.error?.meaning);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const imageUpload = () => {
    inputImage.current.click();
  };
  const handleImageUpload = (e) => {
    const { files } = e.target;
    setShowImage(files[0]);
    getBase64(files[0]);
  };
  function getBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setPreviewImage(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.post(
          "https://infowarescripts.com/dev/react-mechine-test/api/get-edit-profile-data",
          {},
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        console.log(response);
        formikRef?.current?.setFieldValue(
          "name",
          response?.data?.userdata?.name || ""
        );
        formikRef?.current?.setFieldValue(
          "email",
          response?.data?.userdata?.email || ""
        );
        formikRef?.current?.setFieldValue(
          "phone",
          response?.data?.userdata?.phone || ""
        );
        formikRef?.current?.setFieldValue(
          "about",
          response?.data?.userdata?.about_me || ""
        );
        formikRef?.current?.setFieldValue(
          "dob",
          response?.data?.userdata?.date_of_birth
            ? moment(response?.data?.userdata?.date_of_birth).format("L")
            : ""
        );
        formikRef?.current?.setFieldValue(
          "gender",
          response?.data?.userdata?.gender || ""
        );
        formikRef?.current?.setFieldValue(
          "travel",
          JSON.parse(response?.data?.userdata?.get_around_by) || ""
        );
        formikRef?.current?.setFieldValue(
          "language",
          response?.data?.userdata?.get_language.map((item) => {
            return {
              label: item?.get_language_name.language,
              value: item?.get_language_name?.id,
            };
          }) || ""
        );
        formikRef?.current?.setFieldValue(
          "country",
          response?.data?.userdata?.country_id || ""
        );
        formikRef?.current?.setFieldValue(
          "state",
          response?.data?.userdata?.state || ""
        );
        formikRef?.current?.setFieldValue(
          "city",
          response?.data?.userdata?.city || ""
        );
        formikRef?.current?.setFieldValue(
          "country",
          response?.data?.userdata?.country_id || ""
        );
        setPreviewImage(response?.data?.userData?.image);
        setLanguages(
          response?.data?.language?.map((item) => {
            return { label: item.language, value: item.id };
          })
        );
        setCountry(
          response?.data?.country?.map((item) => {
            return { label: item.name, value: item.id };
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    getDetails();
  }, []);
  return (
    <div className="total-section">
      <NavBar />
      <div className="edit-profile-main-section">
        <div className="edit-profile-left-section">
          <div className="user-details">
            <img src={require("../../images/fake avatar.jpg")} alt="avatar" />
            <p>Rabin Mnna</p>
            <div className="rating-section">
              <img src={require("../../images/filled star.png")} alt="star" />
              <img src={require("../../images/filled star.png")} alt="star" />
              <img src={require("../../images/filled star.png")} alt="star" />
              <img src={require("../../images/filled star.png")} alt="star" />
              <img src={require("../../images/empty star.png")} alt="star" />
              <p className="rating-text">(410)</p>
            </div>
          </div>
          <div className="profile-navigation-section">
            {profileSidebarOptions.map((option, index) => (
              <div className="profile-navigation-option" key={index}>
                <div
                  className="navigation-option-details"
                  onClick={() => {
                    navigate(option.navigate);
                  }}
                >
                  <img
                    src={option.img}
                    alt="navigation"
                    className="navigation-img"
                  />
                  <p className="navigation-title">{option.title}</p>
                </div>
                {option.count > 0 && (
                  <p className="navigation-count">{option.count}</p>
                )}
              </div>
            ))}
          </div>
          <div className="logout-section">
            <div className="profile-navigation-option">
              <div
                className="navigation-option-details"
                onClick={() => {
                  dispatch(addToken(""));
                }}
              >
                <img
                  src={require("../../images/logout.png")}
                  alt="logout"
                  className="navigation-img"
                />
                <p className="navigation-title">Log Out</p>
              </div>
            </div>
          </div>
        </div>
        <div className="edit-profile-right-section">
          <h2>Edit Profile</h2>
          <div className="edit-profile-edit-main-section">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                about: "",
                dob: "",
                gender: true,
                travel: "",
                language: [],
                country: "",
                state: "",
                city: "",
                password: "",
                newPassword: "",
                confirmPassword: "",
              }}
              innerRef={formikRef}
              validationSchema={yup.object().shape({
                name: yup.string().trim().required("Name is mandatory"),
                email: yup
                  .string()
                  .trim()
                  .matches(emailRegex, "Invalid email address")
                  .required("Email is mandatory"),
                phone: yup
                  .string()
                  .trim()
                  .min(10, "Mobile no should be 10 digit")
                  .max(10, "Mobile no should be 10 digit")
                  .required("Mobile no is mandatory"),
                newPassword: yup
                  .string()
                  .trim()
                  .matches(passwordRegex, "Please enter valid password"),
                confirmPassword: yup
                  .string()
                  .trim()
                  .oneOf(
                    [yup.ref("newPassword"), null],
                    "Both passwords are not same"
                  ),
              })}
              onSubmit={(values, { resetForm }) => {
                submitProfile(values, resetForm);
              }}
            >
              {({
                values,
                handleSubmit,
                handleChange,
                handleBlur,
                setFieldValue,
              }) => (
                <form className="edit-profile-form" onSubmit={handleSubmit}>
                  <div className="input-division">
                    <div style={{ width: "31%" }}>
                      <InputWithLabel
                        label="Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="name" />
                    </div>
                    <div style={{ width: "31%" }}>
                      <InputWithLabel
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="email" />
                    </div>
                    <div style={{ width: "31%" }}>
                      <InputWithLabel
                        label="Phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="phone" />
                    </div>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <TextAreaWithLabel
                      label="About me"
                      name="about"
                      value={values.about}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="input-division">
                    <div style={{ width: "40%" }}>
                      <InputWithLabel
                        name="dob"
                        label="Date of Birth"
                        value={values.dob}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div style={{ width: "56%" }}>
                      <p className="label">Gender</p>
                      <div className="radio-button-section">
                        <div className="radio-button">
                          <input
                            type="radio"
                            checked={values.gender}
                            onChange={() => {
                              setFieldValue("gender", true);
                            }}
                          />
                          <p>Male</p>
                        </div>
                        <div className="radio-button">
                          <input
                            type="radio"
                            checked={!values.gender}
                            onChange={() => {
                              setFieldValue("gender", false);
                            }}
                          />
                          <p>Female</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkbox-section">
                    <p>Travel</p>
                    <div className="checkbox-button-section">
                      <div className="checkbox-button">
                        <Checkbox
                          sx={{
                            color: "#aaaaaa",
                            "&.Mui-checked": {
                              color: "#f82e2e",
                            },
                          }}
                          checked={values.travel === "bus"}
                          onChange={() => {
                            setFieldValue("travel", "bus");
                          }}
                        />
                        <p>Bus</p>
                      </div>
                      <div className="checkbox-button">
                        <Checkbox
                          sx={{
                            color: "#aaaaaa",
                            "&.Mui-checked": {
                              color: "#f82e2e",
                            },
                          }}
                          checked={values.travel === "car"}
                          onChange={() => {
                            setFieldValue("travel", "car");
                          }}
                        />
                        <p>Car</p>
                      </div>
                      <div className="checkbox-button">
                        <Checkbox
                          sx={{
                            color: "#aaaaaa",
                            "&.Mui-checked": {
                              color: "#f82e2e",
                            },
                          }}
                          checked={values.travel === "track"}
                          onChange={() => {
                            setFieldValue("travel", "track");
                          }}
                        />
                        <p>Track</p>
                      </div>
                      <div className="checkbox-button">
                        <Checkbox
                          sx={{
                            color: "#aaaaaa",
                            "&.Mui-checked": {
                              color: "#f82e2e",
                            },
                          }}
                          checked={values.travel === "walk"}
                          onChange={() => {
                            setFieldValue("travel", "walk");
                          }}
                        />
                        <p>Walk</p>
                      </div>
                      <div className="checkbox-button">
                        <Checkbox
                          sx={{
                            color: "#aaaaaa",
                            "&.Mui-checked": {
                              color: "#f82e2e",
                            },
                          }}
                          checked={values.travel === "scooter"}
                          onChange={() => {
                            setFieldValue("travel", "scooter");
                          }}
                        />
                        <p>Scooter</p>
                      </div>
                    </div>
                  </div>
                  <p className="label">Language</p>
                  <Select
                    isSearchable={true}
                    options={languages}
                    styles={customStyles}
                    isMulti={true}
                    onChange={(e) => {
                      console.log(e);
                      setFieldValue("language", e);
                    }}
                    value={values.language}
                    placeholder="Select"
                  />
                  <div className="profile-image-upload-section">
                    <p className="label">Profile Image</p>
                    <input
                      type="file"
                      ref={inputImage}
                      onChange={handleImageUpload}
                      value=""
                      accept=".png, .jpg, .jpeg"
                      style={{ display: "none" }}
                    />
                    <label className="upload-section">
                      <div onClick={imageUpload}>
                        Click here to Upload Profile Image
                        <img
                          src={require("../../images/upload.png")}
                          alt="upload"
                          style={{ marginLeft: "25px" }}
                        />
                      </div>
                      <img
                        src={
                          previewImage
                            ? previewImage
                            : require("../../images/fake avatar.jpg")
                        }
                        alt="avatar"
                        className="upload-image-avatar"
                      />
                    </label>
                  </div>
                  <h2 className="bold-label">Location</h2>
                  <div className="input-division">
                    <div style={{ width: "31%" }}>
                      <SelectInputWithLabel
                        label="Country"
                        options={country}
                        value={values.country}
                        onChange={(e) => {
                          setFieldValue("country", e.target.value);
                        }}
                      />
                    </div>
                    <div style={{ width: "31%" }}>
                      <InputWithLabel
                        label="State"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div style={{ width: "31%" }}>
                      <InputWithLabel
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full address"
                      />
                    </div>
                  </div>
                  <h2 className="bold-label">Change password</h2>
                  <div className="input-division">
                    <div style={{ width: "31%" }}>
                      <InputWithLabel
                        label="Current password"
                        name="password"
                        isPasswordInput={true}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="password" />
                    </div>
                    <div style={{ width: "31%" }}>
                      <InputWithLabel
                        label="New password"
                        name="newPassword"
                        isPasswordInput={true}
                        value={values.newPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="newPassword" />
                    </div>
                    <div style={{ width: "31%" }}>
                      <InputWithLabel
                        label="Confirm password"
                        name="confirmPassword"
                        isPasswordInput={true}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="confirmPassword" />
                    </div>
                  </div>
                  <div className="button-section">
                    <button type="submit">
                      <img
                        src={require("../../images/tag.png")}
                        alt="tag"
                        style={{ marginRight: "10px" }}
                      />
                      Save all changes
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;

import React from "react";
import "./navBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../store/Reducers/userDataReducer";
const NavBar = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.userToken);
  const handleEmailClick = () => {
    window.location.href = "mailto:dhrubadjs.mng@gmail.com";
  };
  const handleCall = () => {
    window.location.href = "tel:+917797813261";
  };
  const navigate = useNavigate();
  return (
    <div className="total-nav">
      <div className="nav-top-section">
        <div className="address">
          <img src={require("../../images/map.png")} alt="map" />
          <p>
            Sarkar shoss exclusive Natun Bazar turminal complex, PO : Maynaguri,
            Dist : Jalpaiguri, Pin : 753224.
          </p>
        </div>
        <div className="mail" onClick={handleEmailClick}>
          <img src={require("../../images/mail.png")} alt="email" />
          <p>dhrubadjs.mng@gmail.com</p>
        </div>
        <div className="call" onClick={handleCall}>
          <img src={require("../../images/call.jpg")} alt="call" />
          <p>+91 7797813261</p>
        </div>
      </div>
      <div className="nav-middle-bar">
        <img
          src={require("../../images/logo.png")}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        {userToken && (
          <div className="nav-search">
            <input placeholder="Search for Products" />
            <img src={require("../../images/search.png")} alt="search" />
          </div>
        )}
      </div>
      <div className="nav-bottom-section">
        <NavLink to="" className="each-link selected">
          All Categories{" "}
          <img src={require("../../images/dropdown.png")} alt="dropdown" />
        </NavLink>
        <NavLink to="" className="each-link">
          About Bazar Maynaguri
        </NavLink>
        <NavLink to="" className="each-link">
          B2B Information
        </NavLink>
        <NavLink to="" className="each-link">
          FAQ
        </NavLink>
        <NavLink to="" className="each-link">
          Contact Us
        </NavLink>
        <NavLink to="" className="each-link">
          Enquiry Us
        </NavLink>
        {userToken && (
          <>
            <NavLink to="/edit-profile" className="each-link">
              Edit Profile
            </NavLink>
            <button
              className="each-link logout"
              onClick={() => {
                dispatch(addToken(""));
              }}
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import design from "./styles.module.css";
import homeicon from "./images/overview.svg";
import stats from "./images/statistics.svg";
import profile from "./images/profile.svg";
import admin from "./images/admin.svg";
import searchbar from "./images/searchbar.svg";
import mainpic from "./images/mainpic.svg";
import { useUser } from "../../../contexts/user";

function Sidebar() {
  const location = useLocation();
  const [state, dispatch] = useUser();

  return (
    <div className={design.leftbar}>
      <div className={design.profPicandName}>
        <div className={design.profile}>
          <img src={mainpic} alt="hello" className={design.mainphoto}></img>
        </div>
        <p className={design.profileName}>Admin {state.user.name}</p>
      </div>
      <div className={design.choices}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <div className={design.option}>
            <svg
              className={
                location.pathname === "/dashboard"
                  ? design.active
                  : design.icons
              }
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10.95H7.95V11V16.95H3.05V9V8.95H3H0.130298L10 0.0672681L19.8697 8.95H17H16.95V9V16.95H12.05V11V10.95H12H8Z"
                stroke="black"
                stroke-width="0.1"
              />
            </svg>

            <p
              className={
                location.pathname === "/dashboard"
                  ? design.optionnamesActive
                  : design.optionnamesInactive
              }
            >
              Overview
            </p>
          </div>
        </Link>
        <Link to="/dashboard/statistics" style={{ textDecoration: "none" }}>
          <div className={design.option}>
            <svg
              className={
                location.pathname === "/dashboard/statistics"
                  ? design.active
                  : design.icons
              }
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.05 19.95V6.05H3.95V19.95H0.05ZM7.05 19.95V0.05H10.95V19.95H7.05ZM14.05 19.95V12.05H17.95V19.95H14.05Z"
                stroke="black"
                stroke-width="0.1"
              />
            </svg>

            <p
              className={
                location.pathname === "/dashboard/statistics"
                  ? design.optionnamesActive
                  : design.optionnamesInactive
              }
            >
              Statistics
            </p>
          </div>
        </Link>
        <Link to="/dashboard/student" style={{ textDecoration: "none" }}>
          <div className={design.option}>
            <svg
              className={
                location.pathname === "/dashboard/student"
                  ? design.active
                  : design.icons
              }
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.05C9.04761 0.05 10.0523 0.466159 10.7931 1.20693C11.5338 1.9477 11.95 2.95239 11.95 4C11.95 5.04761 11.5338 6.0523 10.7931 6.79307C10.0523 7.53384 9.04761 7.95 8 7.95C6.95239 7.95 5.9477 7.53384 5.20693 6.79307C4.46616 6.0523 4.05 5.04761 4.05 4C4.05 2.95239 4.46616 1.9477 5.20693 1.20693C5.9477 0.466159 6.95239 0.05 8 0.05ZM8 10.05C10.2039 10.05 12.1959 10.4964 13.6351 11.216C15.0773 11.9371 15.95 12.9241 15.95 14V15.95H0.05V14C0.05 12.9241 0.922694 11.9371 2.36486 11.216C3.80405 10.4964 5.79607 10.05 8 10.05Z"
                stroke="black"
                stroke-width="0.1"
              />
            </svg>
            <p
              className={
                location.pathname === "/dashboard/student"
                  ? design.optionnamesActive
                  : design.optionnamesInactive
              }
            >
              Student
            </p>
          </div>
        </Link>
        <Link to="/dashboard/faculty" style={{ textDecoration: "none" }}>
          <div className={design.option}>
            <svg
              className={
                location.pathname === "/dashboard/faculty"
                  ? design.active
                  : design.icons
              }
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.05C9.04761 0.05 10.0523 0.466159 10.7931 1.20693C11.5338 1.9477 11.95 2.95239 11.95 4C11.95 5.04761 11.5338 6.0523 10.7931 6.79307C10.0523 7.53384 9.04761 7.95 8 7.95C6.95239 7.95 5.9477 7.53384 5.20693 6.79307C4.46616 6.0523 4.05 5.04761 4.05 4C4.05 2.95239 4.46616 1.9477 5.20693 1.20693C5.9477 0.466159 6.95239 0.05 8 0.05ZM8 10.05C10.2039 10.05 12.1959 10.4964 13.6351 11.216C15.0773 11.9371 15.95 12.9241 15.95 14V15.95H0.05V14C0.05 12.9241 0.922694 11.9371 2.36486 11.216C3.80405 10.4964 5.79607 10.05 8 10.05Z"
                stroke="black"
                stroke-width="0.1"
              />
            </svg>
            <p
              className={
                location.pathname === "/dashboard/faculty"
                  ? design.optionnamesActive
                  : design.optionnamesInactive
              }
            >
              Faculty
            </p>
          </div>
        </Link>
        <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
          <div className={design.option}>
            <svg
              className={
                location.pathname === "/dashboard/profile"
                  ? design.active
                  : design.icons
              }
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.05C9.04761 0.05 10.0523 0.466159 10.7931 1.20693C11.5338 1.9477 11.95 2.95239 11.95 4C11.95 5.04761 11.5338 6.0523 10.7931 6.79307C10.0523 7.53384 9.04761 7.95 8 7.95C6.95239 7.95 5.9477 7.53384 5.20693 6.79307C4.46616 6.0523 4.05 5.04761 4.05 4C4.05 2.95239 4.46616 1.9477 5.20693 1.20693C5.9477 0.466159 6.95239 0.05 8 0.05ZM8 10.05C10.2039 10.05 12.1959 10.4964 13.6351 11.216C15.0773 11.9371 15.95 12.9241 15.95 14V15.95H0.05V14C0.05 12.9241 0.922694 11.9371 2.36486 11.216C3.80405 10.4964 5.79607 10.05 8 10.05Z"
                stroke="black"
                stroke-width="0.1"
              />
            </svg>
            <p
              className={
                location.pathname === "/dashboard/profile"
                  ? design.optionnamesActive
                  : design.optionnamesInactive
              }
            >
              Profile
            </p>
          </div>
        </Link>
        <Link to="/dashboard/admin" style={{ textDecoration: "none" }}>
          <div className={design.option}>
            <svg
              className={
                location.pathname === "/dashboard/admin"
                  ? design.active
                  : design.icons
              }
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 12.45H0.05V7C0.05 6.48283 0.255446 5.98684 0.621142 5.62114C0.986838 5.25545 1.48283 5.05 2 5.05H5C5.51717 5.05 6.01316 5.25545 6.37886 5.62114C6.74455 5.98684 6.95 6.48283 6.95 7V12.45H5.5H5.45V12.5V19.95H1.55V12.5V12.45H1.5ZM10.5 12.45H9.05V7C9.05 6.48283 9.25545 5.98684 9.62114 5.62114C9.98684 5.25545 10.4828 5.05 11 5.05H14C14.5172 5.05 15.0132 5.25545 15.3789 5.62114C15.7446 5.98684 15.95 6.48283 15.95 7V12.45H14.5H14.45V12.5V19.95H10.55V12.5V12.45H10.5ZM3.5 0.05C4.01717 0.05 4.51316 0.255446 4.87886 0.621142C5.24455 0.986838 5.45 1.48283 5.45 2C5.45 2.51717 5.24455 3.01316 4.87886 3.37886C4.51316 3.74455 4.01717 3.95 3.5 3.95C2.98283 3.95 2.48684 3.74455 2.12114 3.37886C1.75545 3.01316 1.55 2.51717 1.55 2C1.55 1.48283 1.75545 0.986838 2.12114 0.621142C2.48684 0.255446 2.98283 0.05 3.5 0.05ZM12.5 0.05C13.0172 0.05 13.5132 0.255446 13.8789 0.621142C14.2446 0.986838 14.45 1.48283 14.45 2C14.45 2.51717 14.2446 3.01316 13.8789 3.37886C13.5132 3.74455 13.0172 3.95 12.5 3.95C11.9828 3.95 11.4868 3.74455 11.1211 3.37886C10.7554 3.01316 10.55 2.51717 10.55 2C10.55 1.48283 10.7554 0.986838 11.1211 0.621142C11.4868 0.255446 11.9828 0.05 12.5 0.05Z"
                stroke="black"
                stroke-width="0.1"
              />
            </svg>

            <p
              className={
                location.pathname === "/dashboard/admin"
                  ? design.optionnamesActive
                  : design.optionnamesInactive
              }
            >
              Admin
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

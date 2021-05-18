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
        <p className={design.profileName}>{state.user.firstName}</p>
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
      </div>
    </div>
  );
}

export default Sidebar;

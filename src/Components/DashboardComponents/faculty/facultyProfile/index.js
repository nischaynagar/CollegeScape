import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const FacultyProfile = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [facultynum, setEnrolnum] = useState();
  const [emailaddr, setemailaddr] = useState();
  const [batch, setBatch] = useState();
  const [gender, setGender] = useState();
  const [dob, setdob] = useState();
  const [phn, setphn] = useState();

  const forFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const forLastName = (event) => {
    setLastName(event.target.value);
  };

  const facultyNum = (event) => {
    setEnrolnum(event.target.value);
  };

  const forEmail = (event) => {
    setemailaddr(event.target.value);
  };

  const forBatch = (event) => {
    setBatch(event.target.value);
  };

  const forGender = (event) => {
    setGender(event.target.value);
  };

  const fordob = (event) => {
    setdob(event.target.value);
  };

  const forphn = (event) => {
    setphn(event.target.value);
  };

  const [finalfirstName, setfinalFirstName] = useState();
  const [finallastName, setfinalLastName] = useState();
  const [finalfacultynum, setfinalEnrolnum] = useState();
  const [finalemailaddr, setfinalemailaddr] = useState();
  const [finalbatch, setfinalBatch] = useState();
  const [finalgender, setfinalGender] = useState();
  const [finaldob, setfinaldob] = useState();
  const [finalphn, setfinalphn] = useState();
  const saveValues = (event) => {
    event.preventDefault();
    setfinalFirstName(firstName);
    setfinalLastName(lastName);
    setfinalEnrolnum(facultynum);
    setfinalemailaddr(emailaddr);
    setfinalBatch(batch);
    setfinalGender(gender);
    setfinaldob(dob);
    setfinalphn(phn);
  };
  return (
    <>
      <div className="">
        <form onSubmit={saveValues}>
          <div className="card">
            <h1>FACULTY PROFILE</h1>
            <br />
            <div className="left">
              <div className="left">
                <div className="">
                  <label className="forlabel">First Name</label>
                  <br />
                  <input
                    className="forInput"
                    type="text"
                    onChange={forFirstName}
                    value={firstName}
                  ></input>
                  <br />
                </div>

                <div className="">
                  <label className="forlabel">Last Name</label>
                  <br />
                  <input
                    className="forInput"
                    type="text"
                    onChange={forLastName}
                    value={lastName}
                  ></input>
                  <br />
                </div>

                <div className="">
                  <label className="forlabel">Faculty ID</label>
                  <br />
                  <input
                    className="forInput"
                    type="text"
                    onChange={facultyNum}
                    value={facultynum}
                  ></input>
                  <br />
                </div>

                <div className="">
                  <label className="forlabel">Email</label>
                  <br />
                  <input
                    className="forInput"
                    type="email"
                    onChange={forEmail}
                    value={emailaddr}
                  ></input>
                  <br />
                </div>
              </div>

              <div className="">
                <div className="right">
                  <label className="forlabel">Batch</label>
                  <br />
                  <input
                    className="forInput"
                    type="text"
                    onChange={forBatch}
                    value={batch}
                  ></input>
                  <br />
                </div>

                <div className="right">
                  <label className="forlabel">Gender</label>
                  <br />
                  <input
                    className="forInput"
                    type="text"
                    onChange={forGender}
                    value={gender}
                  ></input>
                  <br />
                </div>

                <div className="right">
                  <label className="forlabel">Date Of Birth</label>
                  <br />
                  <input
                    className="forInput"
                    type="text"
                    onChange={fordob}
                    value={dob}
                  ></input>
                  <br />
                </div>

                <div className="right">
                  <label className="forlabel">Phone no.</label>
                  <br />
                  <input
                    className="forInput"
                    type="text"
                    onChange={forphn}
                    value={phn}
                  ></input>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <div>
              <span>
                <a
                  className="btn btn-primary space"
                  href="https://www.google.com/"
                  type="submit"
                >
                  Enrolled courses
                </a>
                <button className="btn btn-success space" type="submit">
                  Save changes
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default FacultyProfile;

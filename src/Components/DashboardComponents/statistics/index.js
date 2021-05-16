import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { url } from "../../../constants";

var nstudent=0,nfaculty=0,ncourses=0;
function Statistics() {

  // const [nstudent,setnstudent]=useState();
  // const [nfaculty,setfaculty]=useState();
  // const [ncourses,setcourses]=useState();
  const [loadeds,setloadeds] =useState(false);
  const [loadedc,setloadedc] =useState(false);
  const [loadedf,setloadedf] =useState(false);

  useEffect(()=>{
    axios.get(`${url}api/count_students`)
     .then(res=>{
        console.log("GOT stud respnse",res);

        //setnstudent(res.data.result);
        nstudent=res.data.result;
        console.log(res.data.result);
        console.log("nstudent is ",nstudent);
        setloadeds(true);
     }
     )
     .catch(err=>{
       console.log(err);
     });
     axios.get(`${url}api/count_courses`)
     .then(res=>{
        console.log("GOT course respnse",res);
        ncourses=res.data.result;
        //setcourses(res.data.result);
        console.log("ncourses is ",ncourses);
        setloadedc(true);
     }
     )
     .catch(err=>{
       console.log(err);
     });
     axios.get(`${url}api/count_faculties`)
     .then(res=>{
        console.log("GOT facd respnse",res);
        nfaculty=res.data.result;
        //setfaculty(res.data.result);
        setloadedf(true);
     }
     )
     .catch(err=>{
       console.log(err);
     })      
  },[]);

  return (
    <>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <div className={design.optionname}>Search</div>
        </div>
        <div>
          <div className={design.title}>Statistics</div>
        </div>

        <div className={design.rowbox}>
          <div className={design.statbox}>
            <div className={design.statname}>Number of Students</div>
            <div className={design.outercircle}>
              <div className={design.innercircle}>
                <div className={design.data}>{loadeds && nstudent}</div>
              </div>
            </div>
          </div>
          <div className={design.statbox}>
            <div className={design.statname}>Number of Faculty</div>
            <div className={design.outercircle}>
              <div className={design.innercircle}>
                <div className={design.data}>{loadedf && (nfaculty)}</div>
              </div>
            </div>
          </div>
          <div className={design.statbox}>
            <div className={design.statname}>Number of Courses</div>
            <div className={design.outercircle}>
              <div className={design.innercircle}>
                <div className={design.data}>{loadedc && (ncourses)}</div>
              </div>
            </div>
          </div>
          <div className={design.statbox}>
            <div className={design.statname}>Number of Working Days</div>
            <div className={design.outercircle}>
              <div className={design.innercircle}>
                <div className={design.data}>365</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;

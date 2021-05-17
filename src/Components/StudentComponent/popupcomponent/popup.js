import React from 'react';
import design from './pop.module.css';
import axios from "axios";
import { url } from "../../../constants";
import { useHistory } from "react-router-dom";
function Popup(props) {

const history = useHistory();
// const deleteData=(event)=>{
//     event.preventDefault();
//     console.log(" Data -c sent  :", props.id);
//     axios.post(`${url}api/studentid`, {
//         "StudentID" : props.id 
//     })
//       .then((res) => {
//         console.log("Student Id sent for deletion", res);
//         history.push("/dashboard/student");
//       })
//       .catch((err) => {
//         console.log("Failed to delete student ", err);
//       }
//       )
// };    
    return (props.trigger) ? (
        <div className={design.popup}>
            <div className={design.popupinner}>
                <button className="btn btn-success space" onClick={props.deleteData}>
                    Delete
                </button>
                <button className="btn btn-primary space" onClick={() => props.setTrigger(false)}>
                    Cancel
                </button>
                {props.children}
            </div>
        </div>

    ) : "";
}

export default Popup;
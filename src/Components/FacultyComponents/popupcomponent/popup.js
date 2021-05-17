import React from 'react';
import design from './pop.module.css';
function Popup(props) {
    return (props.trigger) ? (
        <div className={design.popup}>
            <div className={design.popupinner}>
                <button className="btn btn-success space">
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
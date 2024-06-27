import React from "react";
import "./phone.css";

export default function Phone() {
    return (
        <div className="phone" onClick={()=>{window.open('tel:123345')}}>
            <img src="./pics/phone-icon.png" alt="call"></img>
        </div>
    )
}
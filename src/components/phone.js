import React from "react";
import "./phone.css";

export default function Phone() {
    
    window.onscroll = () => {
        let scrolled = window.scrollY;
        if (scrolled > 1900){
            document.getElementById('phone').style.display="none"
        }else {
            document.getElementById('phone').style.display="block"
        }
    }



    return (
        <div id="phone" className="phone" onClick={()=>{window.open('tel:0771275537')}}>
            <img src="./pics/phone-icon.png" alt="call"></img>
        </div>
    )
}
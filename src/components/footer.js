import React from "react";
import "./footer.css";

export default function Footer() {
    return (
    <footer id="contact">
        <img src="./pics/logo-la-baraca.jpg"></img>
        <h2 className="contact-title">Baraca Grill & More</h2>
        <div className="location" onClick={()=>{window.open('https://maps.app.goo.gl/WYHNJhZFwADgBeW67')}}>
            <img src="./pics/location.png"></img>
            <p>Str Bujorului 1, Lisa, 147170, TR, Romania</p>
        </div>
        <div className="phone1">
                <div className="contact-container phone-container" onClick={()=>{window.open('tel:0771275537')}}>
                    <img className="phone-img" src='./pics/phone-icon-contact.png' alt="icon"></img>
                    <p>0771 275 537</p>
                </div>
        </div>
        <div className="footer">
            <div className="facebook">
                <div className="contact-container" onClick={()=>{window.open('https://www.facebook.com/baracagrillandmorelisa')}}>
                    <img className="footer-img" src="./pics/facebook.png" alt="icon"></img>
                </div>
            </div>
            <div className="instagram">
                <div className="contact-container" onClick={()=>{window.open('https://www.instagram.com/baracagrillandmore/')}}>
                    <img className="footer-img" src='./pics/instagram.png' alt="icon"></img>
                </div>
            </div>
            <div className="whatsapp">
                <div className="contact-container" onClick={()=>{window.open('https://wa.me/40771275537')}}>
                    <img className="footer-img" src='./pics/whatsapp.png' alt="icon"></img>
                </div>
            </div>
        </div>
    </footer>
    )
}
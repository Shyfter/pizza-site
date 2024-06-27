import React from "react";
import "./footer.css";

export default function Footer() {
    return (
    <footer id="contact">
        <h2 className="contact-title">Contact</h2>
        <div className="footer">
            <div className="facebook">
                <div className="contact-container" onClick={()=>{window.open('https://www.facebook.com/baracagrillandmorelisa')}}>
                    <img src="./pics/facebook.png" alt="icon"></img>
                    <p>Facebook</p>
                </div>
            </div>
            <div className="instagram">
                <div className="contact-container" onClick={()=>{window.open('https://www.instagram.com/baracagrillandmore/')}}>
                    <img src='./pics/instagram.png' alt="icon"></img>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="whatsapp">
                <div className="contact-container" onClick={()=>{window.open('https://wa.me/40771275537')}}>
                    <img src='./pics/whatsapp.png' alt="icon"></img>
                    <p>Whatsapp</p>
                </div>
            </div>
            <div className="phone1">
                <div className="contact-container" onClick={()=>{window.open('tel:0771275537')}}>
                    <img src='./pics/phone-icon-contact.png' alt="icon"></img>
                    <p>Telefon</p>
                </div>
            </div>
        </div>
    </footer>
    )
}
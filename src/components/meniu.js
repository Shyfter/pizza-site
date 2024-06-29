import React from "react";
import "./meniu.css";

export default function Meniu() {
    return (
        <div id="meniu" className="meniu-container">
            <h2 className="meniu-title">Meniu</h2>
            <div className="meniu-optiuni">
                <div className="ciorbe">
                    <p>CIORBE</p>
                </div>
                <div className="meniuri-complete">
                    <p>MENIURI COMPLETE</p>
                </div>
                <div className="fel-principal">
                    <p>FEL PRINCIPAL</p>
                </div>
                <div className="preparate-la-gratar">
                    <p>PREPARATE LA GRATAR</p>
                </div>
                <div className="fast-food">
                    <p>FAST FOOD</p>
                </div>
                <div className="pizza">
                    <p>PASTE</p>
                </div>
                <div className="gustari-calde">
                    <p>GUSTARI CALDE</p>
                </div>
                <div className="desert">
                    <p>DESERT</p>
                </div>
                <div className="garnituri">
                    <p>GARNITURI</p>
                </div>
            </div>
        </div>
    )
}
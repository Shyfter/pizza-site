import "./pizza.css";
import React from "react";

export default function Pizza() {

    const pizzaArray = {
        0 : {
            id:0,
            title: "Pizza Margherita",
            imgUrl: './pics/pizza-margherita-1.png',
            description: "Ce contine pizza margherita",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        1 : {
            id:1,
            title: "Pizza Diavola",
            imgUrl: "./pics/pizza-diavola-1.png",
            description: "Ce contine pizza diavola",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        2 : {
            id:2,
            title: "Pizza Casei",
            imgUrl: "./pics/pizza-casei-1.png",
            description: "Ce contine pizza casei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        }
    }

    const cardRenderer = []
    
    function RenderCard() {
        for (let i=0; i < 3; i++){
            cardRenderer.push(
            <div key={pizzaArray[i].id} className="pizza-card">
                <img className="card-pic" alt="pizza" src={pizzaArray[i].imgUrl}></img>
                <div className="card-bottom-section">
                    <h4 className="pizza-name">{pizzaArray[i].title}</h4>
                    <p className="pizza-description">{pizzaArray[i].description}</p>
                    <div className="pizza-dimensiuni">
                        <div className="pizza-mica">
                            Mica - {pizzaArray[i].pretMica}
                        </div>
                        <div className="pizza-mare">
                            Mare - {pizzaArray[i].pretMare}
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }

    RenderCard()

    return (
        <div className="pizza-section">
            <h3 className="pizza-section-title">Pizza</h3>

            {cardRenderer}

        </div>
    )
}
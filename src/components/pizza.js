import "./pizza.css";
import React from "react";
import PizzaCard from "./pizzaCard";

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
                <PizzaCard 
                key={pizzaArray[i].id}
                id={pizzaArray[i].id} 
                imgUrl={pizzaArray[i].imgUrl} 
                title={pizzaArray[i].title}
                description={pizzaArray[i].description}
                pretMica={pizzaArray[i].pretMica}
                pretMare={pizzaArray[i].pretMare}
                number={i}
                />
            )
        }
    }

    RenderCard()

    return (
        <div id="pizza" className="pizza-section">
            <h3 className="pizza-section-title">Pizza</h3>

            {cardRenderer}

        </div>
    )
}
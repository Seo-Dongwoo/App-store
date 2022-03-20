import React from "react";
import "../css/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>
        NEW PRODUCTS!<p>따끈따끈한 신제품 이야기!</p>
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-c-11.jpg"
              text="iPhone 13 Pro ₩1,350,000부터 Click  "
              label="iPhone"
              path="/products"
            />
            <CardItem
              src="images/img-c-2.jpg"
              text="WATCH SERIES 7 ₩459,000부터 Click "
              label="Watch"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-c-3.jpg"
              text="MacBook Pro ₩2,690,000부터 Click  "
              label="Mac"
              path="/products"
            />
            <CardItem
              src="images/img-c-4.jpg"
              text=" iPad Mini ₩649,000부터 Click "
              label="iPad"
              path="/products"
            />
            <CardItem
              src="images/img-c-5.jpg"
              text="AirPods Pro ₩329,000부터 Click "
              label="AirPods"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

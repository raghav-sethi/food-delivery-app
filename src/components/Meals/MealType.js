import React, { Fragment } from "react";
import Card from "./MealTypeCard";
import breakfastImg from "./../../assets/images/shutterstock_1154073754.png";
import lunchImg from "./../../assets/images/shutterstock_1130181932.jpg";
import snacksImg from "./../../assets/images/shutterstock_351721442.jpg";
import dinnerImg from "./../../assets/images/shutterstock_476864884.jpg";
import drinksImg from "./../../assets/images/shutterstock_305270834.jpg";
import nightlifeImg from "./../../assets/images/shutterstock_1304064250.jpg";

export default function MealType() {
  return (
    <Fragment>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <Card
            src={breakfastImg}
            alt="Breakfast Image"
            title="Breakfast"
            textContent="Start your day with exclusive breakfast options"
          />
          <Card
            src={lunchImg}
            alt="Lunch Image"
            title="Lunch"
            textContent="Start your day with exclusive breakfast options"
          />
          <Card
            src={snacksImg}
            alt="Snacks Image"
            title="Snacks"
            textContent="Start your day with exclusive breakfast options"
          />
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <Card
            src={dinnerImg}
            alt="Dinner Image"
            title="Dinner"
            textContent="Start your day with exclusive breakfast options"
          />
          <Card
            src={drinksImg}
            alt="Drinks Image"
            title="Drinks"
            textContent="Start your day with exclusive breakfast options"
          />
          <Card
            src={nightlifeImg}
            alt="Night Life Image"
            title="Night Life"
            textContent="Start your day with exclusive breakfast options"
          />
        </div>
      </div>
    </Fragment>
  );
}

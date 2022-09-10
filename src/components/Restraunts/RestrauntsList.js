import React from "react";
import RestrauntCard from "./RestrauntCard";
import RestrauntImage from "./../../assets/images/shutterstock_1130181932.jpg";
import Filter from "./Filter";

export default function RestrauntsList(props) {
  return (
    <div className="container mt-4">
      <h1>
        {props.mealType} Places in {props.city}
      </h1>
      <div className="d-flex flex-row mt-4">
        <div>
          <Filter />
        </div>
        <div>
          <RestrauntCard
            src={RestrauntImage}
            alt="Restraunt Image"
            restrauntName="The Big Chill Cakery"
            restrauntPlace="Fort"
            restrauntAddress="Shop 1, Plot D, Samruddhi Complex, Chincholi …"
            cuisines="Bakery"
            costForTwo="$100"
          />
          <RestrauntCard
            src={RestrauntImage}
            alt="Restraunt Image"
            restrauntName="The Big Chill Cakery"
            restrauntPlace="Fort"
            restrauntAddress="Shop 1, Plot D, Samruddhi Complex, Chincholi …"
            cuisines="Bakery"
            costForTwo="$100"
          />
        </div>
      </div>
    </div>
  );
}

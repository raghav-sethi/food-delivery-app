import React from "react";
import Card from "../UI/Card";
import Checkbox from "../UI/Checkbox";
import Radio from "../UI/Radio";

export default function Filter(props) {
  return (
    <Card className="me-4 pt-4 pb-3 px-3">
      <h4>Filters</h4>
      <h6>Select Location</h6>
      <div className="mb-4">
        <select name="city" id="">
          <option value="select-location">Select Location</option>
          <option value="select-location">Select Location</option>
          <option value="select-location">Select Location</option>
        </select>
      </div>
      <div className="mb-4">
        <h6>Cuisines</h6>
        <Checkbox cuisines="North Indian" />
        <Checkbox cuisines="South Indian" />
        <Checkbox cuisines="Chinese" />
        <Checkbox cuisines="Italian" />
      </div>
      <div className="mb-4">
        <h6>Cost For Two</h6>
        <Radio costForTwo="$10 - $100" />
        <Radio costForTwo="$100 - $200" />
        <Radio costForTwo="$200 - $500" />
        <Radio costForTwo="$500 - $1000" />
      </div>
      <div className="mb-4">
        <h4>Sort</h4>
        <Radio costForTwo="Low to High" />
        <Radio costForTwo="High to Low" />
      </div>
    </Card>
  );
}

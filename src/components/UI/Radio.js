import React from "react";

export default function Radio(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        {props.costForTwo}
      </label>
    </div>
  );
}

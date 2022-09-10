import React from "react";

export default function Checkbox(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {props.cuisines}
      </label>
    </div>
  );
}

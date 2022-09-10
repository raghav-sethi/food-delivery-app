import React from "react";
import Card from "../UI/Card";
import styles from "./RestrauntCard.module.css";

function RestrauntCard(props) {
  return (
    <Card className={`${styles.card} mb-4`}>
      <div className="d-flex flex-row  pt-4 px-3 pb-2">
        <div>
          <img src={props.src} alt={props.alt} />
        </div>
        <div>
          <h2>{props.restrauntName}</h2>
          <h5>{props.restrauntPlace}</h5>
          <p>{props.restrauntAddress}</p>
        </div>
      </div>
      <hr />
      <div className="px-3 pb-3">
        <table>
          <tbody>
            <tr>
              <th>CUISINES: </th>
              <td>{props.cuisines}</td>
            </tr>
            <tr>
              <th>COST FOR TWO: </th>
              <td>{props.costForTwo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default RestrauntCard;

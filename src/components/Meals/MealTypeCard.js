import React from "react";
import styles from "./MealTypeCard.module.css";

export default function MealTypeCard(props) {
  return (
    <div class="col">
      <div class={`card ${styles.cardLayout}`}>
        <img
          src={props.src}
          class={`card-img-top ${styles.cardImg}`}
          alt={props.alt}
        />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.textContent}</p>
        </div>
      </div>
    </div>
  );
}

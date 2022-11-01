import React from "react";
import "./MealItem.css";
import MealItemFrom from "./MealItemFrom";
const MealItem = (props) => {
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">₹{props.price}</div>
      </div>
      <div>
        <MealItemFrom />
      </div>
    </li>
  );
};

export default MealItem;

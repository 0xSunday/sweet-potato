import React,{useContext} from "react";
import "./MealItem.css";
import MealItemFrom from "./MealItemFrom";
import CartContext from "../../../Store/cart-context";
const MealItem = (props) => {
 const cartCtx =useContext(CartContext)
  const addToCart=cartAmount=>{
     cartCtx.addItem({
      id:props.id,
      name:props.name,
       amount:cartAmount,
       price:props.price  
     })
  }

  // console.log(MealItem.amount);
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">₹{props.price}</div>
      </div>
      <div>
        <MealItemFrom onAddToCart={addToCart}/>
      </div>
    </li>
  );
};

export default MealItem;

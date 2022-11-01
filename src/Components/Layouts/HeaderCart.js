import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCart.css";
function HeaderCart(props) {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">2</span>
    </button>
  );
}

export default HeaderCart;

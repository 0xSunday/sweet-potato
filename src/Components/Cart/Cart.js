import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const addedCartItems = (
    <ul className="cart-item">
      {[{ id: "c1", name: "sushi", amout: "4", price: "100" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart} >
      {addedCartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>500</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onCloseCart}>Close</button>
        <button className="">Order</button>
      </div>
    </Modal >
  );
};

export default Cart;

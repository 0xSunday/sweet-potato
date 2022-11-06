import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const orderButtonTrue = cartCtx.items.length > 0;
  const totalAmount = cartCtx.totalAmount;
  const addedCartItems = (
    <ul className="cart-item">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {addedCartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onCloseCart}>
          Close
        </button>
        {orderButtonTrue && <button className="button-order">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

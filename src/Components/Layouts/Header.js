import React, { Fragment } from "react";
import "./Header.css";

import coverPhoto from "../../Asset/coverPhoto2.jpg";
import HeaderCart from "./HeaderCart";
function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <div className="logo">
          <h1 className="headerlogo">Sweetato</h1>
          <p className="headerlogotext">Order Your Food By Adding Item To Cart</p>
        </div>

        <HeaderCart onClick={props.onShowCart}/>
        <div className="main-image">
          <img src={coverPhoto} alt="different recipis" />
        </div>
      </header>
    </Fragment>
  );
}

export default Header;

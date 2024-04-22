import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Total(props) {
  console.log("restarted");
  var message = "";
  const cart = useSelector(state => state.cart);
  var subtotal = 0;
  var quantityCart = [];
  var totalPrice = [];

  if (props.display === "main") {
    for (var i = 0; i < cart.length; i++) {
      var price = +cart[i].price;
      quantityCart[i] = cart[i].quantity;
      subtotal += cart[i].price * quantityCart[i];
    }
    message = (
      <div className="flex-container subtotal-main">
        <div className="sub-totalText">Total</div>
        <div className="subtotalM-price">${subtotal.toFixed(2)}</div>
      </div>
    );
  }

  if (props.display === "cart") {
    for (var i = 0; i < cart.length; i++) {
      totalPrice[i] = cart[i].price * cart[i].quantity;
    }
    message = <div>${totalPrice[props.index].toFixed(2)}</div>;
  }

  return (
    <div style={{ width: "100%" }}>
      {message}
    </div>
  );
}

export default Total;

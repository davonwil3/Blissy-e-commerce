import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { add } from './states';

function QuantityState(props) {

  const total = useSelector(state => state.calculate.number);

  var plus = "add"
  var minus = "subtract"
  var display = ""
  var blank = ""
  if (props.display === "menu") {
    display = "cart-quantityS"
    blank = () => {
    }
  }
  if (props.display === "mainpage") {
    display = "cart-quantityM"
    blank = () => {
      props.trigger()
    }
  }

  const cartQ = useSelector(state => state.cart[props.index].quantity);

  return (
    <div className="flex-container " id={display}>
      <div id={props.index} onClick={(event) => { props.function(event, minus, total); blank() }}> - </div>&nbsp;&nbsp;&nbsp;{cartQ}
      &nbsp;&nbsp;&nbsp;<div id={props.index} onClick={(event) => { props.function(event, plus, total); blank() }}>+ </div>
    </div>

  )
}

export default QuantityState;

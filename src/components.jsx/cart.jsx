import React, { useState, useEffect } from "react";
import ButtonUI from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import Store from "./store";
import { remove } from "./states";
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons'
import NavRender from './nav';
import FooterRender from './footer-render'
import Cartm from './cart-menu'
import { calc } from './states';
import { bagContent } from './states';
import Total from './total'
import { Link } from 'react-router-dom';

function Cart() {
  const total = useSelector(state => state.calculate.number);
  const theBag = useSelector(state => state.bag.bagQuantity);
  const [trigger, setTrigger] = React.useState("");

  function reTrigger(totalR) {
    console.log("finally");
    var random = Math.random()
    setTrigger(random)
  }

  console.log(total);

  return (
    <div className="cart-display">
      <NavRender />
      <p className="c-mainTitle"> Shopping Cart</p>
      <div className="flex-container cart-page">
        <div className="flex-container cart-main">
          <div className="flex-container table-container">
            <em className="table-text table-product"> Product</em>
            <em className="table-text table-price">Price</em>
            <em className="table-text table-quantity">quantity</em>
            <em className="table-text item-total">Total</em>
            <div className="break"></div>
            <div className="cart-large">
              <Cartm page="main" trigger={reTrigger} />
            </div>
            <div className="cart-small">
              <Cartm page="small" trigger={reTrigger} />
            </div>
          </div>
        </div>
        <div className="flex-container subtotal-wrapper">
          <div className="flex-container cart-subtotal">
            <Total display="main" trigger={trigger} />
            <div className="flex-container shipping-container">
              <div className="shipping-text">Shipping</div>
              <div className="shipping-price">Free</div>
            </div>
            <div className="shipping-description">
              . Shipping is free and takes 10-12 days depending on your location if you have an issue with your purchase you can call our company and return your product.
            </div>
            <Box mt="5%" ml="auto" mr="auto" width="82%">
              <Link>
                <ButtonUI variant="contained" color="secondary" style={{ width: "100%", fontSize: "11px" }}>
                  Checkout
                </ButtonUI>
              </Link>
            </Box>
          </div>
        </div>
      </div>
      <FooterRender />
    </div>
  );
}

export default Cart;

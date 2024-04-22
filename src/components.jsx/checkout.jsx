import React, { useState } from "react";
import ButtonUI from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons';
import NavRender from './nav';
import FooterRender from './footer-render';
import Total from './total';

function Checkout() {
  const [checkout, setCheckout] = useState("shipping");

  function handleCheckout(navigate) {
    if (navigate === "back") {
      setCheckout("shipping");
    }
    if (navigate === "payment") {
      setCheckout("payment");
    }
  }

  return (
    <div>
      <NavRender />
      <div className="flex-container checkout-page">
        {checkout === "shipping" && (
          <div className="flex-container checkout-container">
            <div className="checkout-title">Checkout</div>
            <div className="checkout-secTitle">Contact information</div>
            <input type="text" className="long-textbox" placeholder="Email address" />
            <div className="checkout-news">
              <input className="checkout-box" type="checkbox" />
              Keep me up to date with exclusive deals
            </div>
            <div className="checkout-secTitle shipping">Shipping Address</div>
            <div className="flex-container name-textboxes">
              <input type="text" className="medium-textbox left-name" placeholder="First Name" />
              <input type="text" className="medium-textbox right-name" placeholder="Last Name" />
            </div>
            <input type="text" className="long-textbox address-text" placeholder="Address" />
            <input type="text" className="long-textbox address-text" placeholder="Apartment, suite (optional)" />
            <input type="text" className="long-textbox address-text" placeholder="City" />
            <div className="flex-container states-textboxes">
              <input type="text" className="small-textbox Country-text" placeholder="Country/Region" />
              <input type="text" className="small-textbox State-text" placeholder="State" />
              <input type="text" className="small-textbox Zip-text" placeholder="Zip code" />
            </div>
            <Box width="22%" height="40px" ml="auto" mt="20px">
              <ButtonUI
                variant="contained"
                color="secondary"
                onClick={() => handleCheckout("payment")}
                style={{
                  height: "100%",
                  width: "100%",
                  fontSize: "11px"
                }}
              >
                to payment
              </ButtonUI>
            </Box>
          </div>
        )}
        {checkout === "payment" && (
          <div className="flex-container checkout-container">
            <div className="checkout-title">Payment</div>
            <div className="checkout-secTitle">Card Number</div>
            <input type="text" className="long-textbox" placeholder="card #" />
            <div className="checkout-secTitle shipping">Billing Address</div>
            <div className="flex-container name-textboxes">
              <input type="text" className="medium-textbox left-name" placeholder="First Name" />
              <input type="text" className="medium-textbox right-name" placeholder="Last Name" />
            </div>
            <input type="text" className="long-textbox address-text" placeholder="Address" />
            <input type="text" className="long-textbox address-text" placeholder="Apartment, suite (optional)" />
            <input type="text" className="long-textbox address-text" placeholder="City" />
            <div className="flex-container states-textboxes">
              <input type="text" className="small-textbox Country-text" placeholder="security code" />
              <input type="text" className="small-textbox State-text" placeholder="State" />
              <input type="text" className="small-textbox Zip-text" placeholder="Zip code" />
            </div>
            <div className="flex-container checkout-buttons">
              <div className="back-button" onClick={() => handleCheckout("back")}>
                <FontAwesomeIcon icon={faChevronLeft} size="1x" /> Back
              </div>
              <Box width="22%" height="40px" ml="auto" mt="20px">
                <ButtonUI
                  variant="contained"
                  color="secondary"
                  style={{
                    height: "100%",
                    width: "100%",
                    fontSize: "11px"
                  }}
                >
                  Make payment
                </ButtonUI>
              </Box>
            </div>
          </div>
        )}
        <div className="flex-container subtotal-wrapperC">
          <div className="flex-container cart-subtotalC">
            <Total display="main" />
            <div className="flex-container shipping-container">
              <div className="shipping-text">Shipping</div>
              <div className="shipping-price">Free</div>
            </div>
            <div className="shipping-description">
              Shipping is free and takes 10-12 days depending on your location if you have an issue with your purchase you can call our company and return your product.
            </div>
            <Box mt="5%" ml="auto" mr="auto" width="82%">
              <Link to={`/cart`}>
                <ButtonUI
                  variant="contained"
                  color="secondary"
                  style={{
                    width: "100%",
                    fontSize: "11px"
                  }}
                >
                  View Cart
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

export default Checkout;

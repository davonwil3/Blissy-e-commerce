import React, { useState } from "react";
import ButtonUI from '@material-ui/core/Button';
import Store from "./store";
import { useSelector, useDispatch } from 'react-redux';
import { add } from './states';
import Cartm from './cart-menu'
import Slide from '@material-ui/core/Slide';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';

import { collection } from './states';
function Popular() {

  const dispatch = useDispatch();

  function sendItem(type) {
    dispatch(collection({ choice: type }))
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState();

  function handleCart(cartSrc, cartName, cartPrice, size) {

    if (typeof size === "undefined") {
      var alert =
        <div class="flex-container alert">
          <p className="alert-texts"> Please select a size to Continue</p>
        </div>

      setModal(alert)
    }
    if (typeof size !== "undefined") {
      var cartObject = {

        name: cartName,
        source: cartSrc,
        price: cartPrice,
        quantity: 1,
        size: size,
        total: cartPrice,
        subtotal: cartPrice
      }

      dispatch(add(cartObject))

      setModal(<Cartm
        page="menu"
        close={handleClose}
      />)
    }
  }

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"

      >
        {modal}
      </Modal>

      <div className="flex-container" id="gender-sec">
        <div className="flex-container gender-containerM">
          <p className="mens-content">Men's clothes</p>
          <div className="gender-overlay"> </div>

          <Link to={`/collection`} onClick={() => sendItem("Men")}><ButtonUI variant="contained" color="secondary" className="gender-button"  >
            Shop
          </ButtonUI>
          </Link>

        </div>
        <div className="flex-container gender-containerW">
          <p className="womens-content">Women's clothes</p>
          <div className="gender-overlay"></div>

          <Link to={`/collection`} onClick={() => sendItem("Women")}><ButtonUI variant="contained" color="secondary" className="gender-button"  >
            Shop
          </ButtonUI>
          </Link>

        </div>
        <div className="break"></div>
        <div className="flex-container " id="about-UsSec">

          <div className="flex-container about-us">
            <h1 className="h1-line">Best Prices on the market</h1>
            <p className="about-text">Blissy delivers high quality clothes at bargain prices. We manufacture our own clothes so we can set set great prices for our customers.
              Checkout our collection and pick the clothes you love.
            </p>
          </div>
          <div className="flex-container aboutpic-container">
            <img src="/images/abiout-pic.jpg" className="about-pic" />
          </div>
        </div>

        <div className="flex-container" id="best-seller">
          <div className="title-style"></div><p className="store-title">Best Sellers</p><div className="title-style"></div>
          <div className="break"></div>
          <p className="store-des">Top products of the week</p>
          <div className="break"></div>

          <Store
            name="blue designed jeans"
            rating={4}
            function={handleCart}
            change={handleOpen}
          />
          <Store
            name="white long-sleeve shirt"
            class="remove"
            function={handleCart}
            change={handleOpen}
          />
          <Store
            name="blue summer dress"
            function={handleCart}
            change={handleOpen}
          />

          <Store
            name="purple jeans"
            function={handleCart}
            change={handleOpen}
          />
          <div className="break popular-break"></div>
          <Store
            name="mud designed shirt"
            function={handleCart}
            change={handleOpen}
          />
          <Store
            name="red skinny jeans"
            function={handleCart}
            change={handleOpen}
          />
          <Store
            name="dark blue jeans"
            class="remove"
            function={handleCart}
            change={handleOpen}
          />

          <Store
            name="blue plaid shirt"
            function={handleCart}
            change={handleOpen}
          />
        </div>
        <div className=" flex-container clothes">
          <div className="flex-container advertisement1">
            <Link to={`/collection`} className="Link" onClick={() => sendItem("dresses")}><div className="flex-container ad-text" ><p className="ad-title">Shop dresses</p></div></Link>
          </div>
          <div className="flex-container advertisement2">
            <Link to={`/collection`} className="Link" onClick={() => sendItem("pants")}><div className="flex-container ad-text" ><p className="ad-title">Shop jeans</p></div></Link>
          </div>
          <div className="flex-container advertisement3">
            <Link to={`/collection`} className="Link" onClick={() => sendItem("shirts")}><div className="flex-container ad-text" ><p className="ad-title">Shop shirts</p></div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Popular;

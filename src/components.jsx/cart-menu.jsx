import React, { useState, useEffect } from "react";
import ButtonUI from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import Store from "./store";
import { remove } from "./states";
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons'
import { add } from './states';
import QuantityState from './quantityState'
import { calc } from './states';
import { bagContent } from './states';
import Total from './total'
import { Link } from 'react-router-dom';
function Cartm(props) {


  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  var [quantityObject, setObject] = React.useState({});

  var actualQuantity = ""
  var name = "";
  var src = ""

  var content = []
  var quantity = Number;
  var price = Number;
  var bag = 0

  var subtotal = 0;
  var actualprice = Number;
  var priceString = ""
  var render = "";

  var [quantityCart, setQuantity] = React.useState([]);
  var [indexState, setIndex] = React.useState([]);
  var [renderR, setRender] = React.useState([]);
  var menu = "menu"
  var smallMenu = "small"
  var indexArray = []


  function callMain() {

    props.trigger()

  }

  function updateQuantity(event, operator) {
    var index = event.target.id
    console.log("clicked");

    if (operator === "add") {

      dispatch(add({ name: cartname[event.target.id], size: size[event.target.id], operator: operator },))

      setRender(Math.random())

    }

    if (operator == "subtract") {
      dispatch(add({ name: cartname[event.target.id], size: size[event.target.id], operator: operator, index: index },))
      setRender(Math.random())
    }
  }
  function deleteCart(event, nameD, sizeD) {
    dispatch(remove({ name: nameD[event.target.id], size: sizeD[event.target.id] }))

    if (typeof props.trigger != "undefined") {
      callMain()
    }
    setRender(Math.random())
  }

  var cartname = []
  var index = "";
  var size = []
  var counter = 0
  for (var i = 0; i < cart.length; i++) {

    counter++
    var name = cart[i].name
    cartname[i] = cart[i].name
    bag += cart[i].quantity
    src = cart[i].source
    size[i] = cart[i].size
    price = +cart[i].price
    priceString = cart[i].price
    quantityCart[i] = cart[i].quantity
    var totalPrice = quantityCart[i] * priceString
    subtotal += cart[i].price * quantityCart[i]

    if (props.page === "menu") {
      content[i] = <div class="flex-container cart-content">
        <div className="flex-container cart-picbox">
          <img src={src} class="cart-menupic"></img>
        </div>
        <div className=" flex-container cart-text">
          <p className="cart-title">{name} <br /><em className="size-cart">size {size[i]}</em> <br /><div className="cart-quantity"  > <QuantityState function={updateQuantity} render={renderR} index={i} display="menu" /> </div><em className="cart-price">$ {priceString}</em>
            <br /> <button className="cart-button" id={i} onClick={(event) => deleteCart(event, cartname, size)}>Remove</button></p>
        </div>

      </div>
    }
    if (props.page === "small") {
      content[i] = <div class="flex-container cart-contentS">
        <div className="flex-container cart-picboxS">
          <img src={src} class="cart-menupicS"></img>
        </div>
        <div className=" flex-container cart-textS">
          <p className="cart-titleS">{name} <br /><em className="size-cartS">size {size[i]}</em> <br /><div className="cart-quantityS"  > <QuantityState function={updateQuantity} render={renderR} index={i} display="menu" /> </div><em className="cart-price">$ {priceString}</em>
            <br /> <button className="cart-buttonS" id={i} onClick={(event) => deleteCart(event, cartname, size)}>Remove</button></p>
        </div>

      </div>


    }
    if (props.page === "main") {

      content[i] = <div class="flex-container cart-mainpage">
        <div className="flex-container cartM-picbox">
          <img src={src} class="cart-mainpic"></img>
          <div className=" flex-container cpic-title"><em className="c-title">{name}</em><em className="size-cartM">size {size[i]}</em></div>
        </div>


        <div className="cart-priceM">${priceString}</div>

        <QuantityState function={updateQuantity} render={renderR} index={i} display="mainpage" trigger={callMain} />

        <br /><div className="flex-container cart-mainTotal"><Total index={i} render={renderR} display="cart" /><button className="cartm-button" id={i} onClick={(event) => deleteCart(event, cartname, size)}>Remove</button></div>
      </div>

    }

  }

  var totalObject = {

    calculation: "subtotal",
    number: subtotal

  }

  dispatch(calc(totalObject))

  const total = useSelector(state => state.calculate.number);

  var bagObj = {

    bagQuantity: bag

  }

  dispatch(bagContent(bagObj))

  const theBag = useSelector(state => state.bag.bagQuantity);
  if (props.page === "menu") {

    render = <div class="flex-container " id="cart-menu">

      <div className="flex-container column-cart">
        <div className="flex-container bag-row">
          <div className="flex-container bag-column">
            <p className="bag-text">My bag ({theBag}) </p>
          </div>
          <div className="flex-container exit-column">
            <button className="exit-btn" onClick={() => props.close()} ><FontAwesomeIcon icon={faTimes} size="1x" className="exit" /> </button>
          </div>
        </div>
        {content}
        <div className="flex-container total">
          <em className="subtotal">subtotal</em> <em className="subtotal-price">${total.toFixed(2)}</em> <br />
        </div>
        <Box mt="5%" ml="auto" mr="auto" width="82%">
          <Link to={`/checkout`}><ButtonUI variant="contained" color="secondary" style={{ width: "100%", fontSize: "11px" }}  >
            Proceed to checkout
          </ButtonUI></Link>
        </Box>


        <Box mt="5%" ml="auto" mr="auto" width="82%" >
          <Link to={`/cart`}><ButtonUI variant="outlined" color="secondary" style={{ width: "100%", fontSize: "11px" }}   >
            View you cart
          </ButtonUI></Link>
        </Box>

      </div>

    </div>
  }

  if (props.page === "main") {

    render = <div>{content}</div>
  }
  if (props.page === "small") {
    render = content

  }
  return (

    <div>
      {render}
    </div>
  )
}

export default Cartm;

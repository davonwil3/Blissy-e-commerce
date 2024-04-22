import React, { useState, useEffect } from "react";
import ButtonUI from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';

function Store(props) {
  const [choosenSize, setSize] = React.useState();
  const [src, setSrc] = React.useState("");
  const [type, setType] = React.useState("");
  const [price, setPrice] = React.useState();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: props.name })
  };

  useEffect(() => {
    fetchImage(options);
  }, []);

  function fetchImage(options) {
    fetch('https://bliss-server-1.onrender.com/image', options)
      .then(response => response.json())
      .then(data => {
        const source = data.source;
        const typeC = data.type;
        let dataPrice = data.price;
        dataPrice = dataPrice.toFixed(2);
        setSrc(source);
        setType(typeC);
        setPrice(dataPrice);
      });
  }

  function sizeClick(e) {
    const sizes = document.getElementsByClassName('size-icon');
    setSize(e.target.innerHTML);
    for (let i = 0; i < sizes.length; i++) {
      sizes[i].style.backgroundColor = "#F4F4F4";
      sizes[i].style.color = "darkgray";
    }
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }

  function changeSize() {
    // TODO: Implement changeSize function
  }

  let small, light, medium, large, extra;

  if (type === 'shirts' || type === 'dress') {
    small = "S";
    light = "M";
    medium = "L";
    large = "XL";
    extra = "XXL";
  }

  if (type === 'pants' || type === 'shorts') {
    small = 30;
    light = 32;
    medium = 34;
    large = 36;
    extra = 38;
  }

  let render = (
    <div className={"flex-container column " + props.class}>
      <div class="flex-container" id="store">
        <div className="flex-container store-img" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
      <p className="line-height">
        {props.name}<br />
        ${price}
        <div className="flex-container sizes">
          <div className="size-icon" onClick={sizeClick}>{small}</div>
          <div className="size-icon" onClick={sizeClick}>{light}</div>
          <div className="size-icon" onClick={sizeClick}>{medium}</div>
          <div className="size-icon" onClick={sizeClick}>{large}</div>
          <div className="size-icon" onClick={sizeClick}>{extra}</div>
        </div>
      </p>
      <Box mb="5%">
        <ButtonUI variant="contained" color="secondary" className="store-button" onClick={() => { changeSize(); props.function(src, props.name, price, choosenSize); props.change() }}>
          Add to Cart
        </ButtonUI>
      </Box>
    </div>
  );

  if (typeof props.display !== "undefined") {
    render = (
      <div className="flex-container columnM">
        <div class="flex-container" id="storeM">
          <div className="flex-container store-imgM" style={{ backgroundImage: `url(${src})` }}></div>
        </div>
        <p className="line-height">
          {props.name}<br />
          ${price}
          <div className="flex-container sizesM">
            <div className="size-icon" onClick={sizeClick}>{small}</div>
            <div className="size-icon" onClick={sizeClick}>{light}</div>
            <div className="size-icon" onClick={sizeClick}>{medium}</div>
            <div className="size-icon" onClick={sizeClick}>{large}</div>
            <div className="size-icon" onClick={sizeClick}>{extra}</div>
          </div>
        </p>
        <Box mb="5%">
          <ButtonUI variant="contained" color="secondary" className="store-buttonM" onClick={() => { changeSize(); props.function(src, props.name, price, choosenSize); props.change() }}>
            Add to Cart
          </ButtonUI>
        </Box>
      </div>
    );
  }

  return (
    <div>
      {render}
    </div>
  );
}

export default Store;

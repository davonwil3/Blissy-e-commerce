import React, { useState, useEffect } from "react";
import ButtonUI from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import {useSelector, useDispatch} from 'react-redux';
import Box from '@material-ui/core/Box';

function Store(props){





var [choosenSize, setSize]= React.useState();
var [src, setSrc]= React.useState("");
var [type, setType]= React.useState("");
var [price, setPrice]= React.useState();

  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'



    },
    body: JSON.stringify({name: props.name})


  };

  fet(options)
function fet(options){

  fetch('/image', options).then(response => response.json()).then(data =>{

var   source = data.source
var  typeC = data.type
var dataPrice = data.price

dataPrice=dataPrice.toFixed(2)
  setSrc(source)
  setType(typeC)
  setPrice(dataPrice)
  })

}

function sizeClick(e){


var sizes = document.getElementsByClassName('size-icon')

setSize(e.target.innerHTML)


for (var i = 0; i < sizes.length; i++) {
  sizes[i].style.backgroundColor="#F4F4F4"
  sizes[i].style.color="darkgray"
}

e.target.style.backgroundColor= "white"
e.target.style.color= "black"


}
function changeSize(){






}



if (type === 'shirts' || type === 'dress'){

  var small = "S";
  var light = "M"
  var medium = "L";
  var large = "XL"
  var extra = "XXL"


}



if (type === 'pants' || type === 'shorts'){

var small = 30;
var light = 32
var medium = 34
var large = 36
var extra = 38





}

var render =
    <div className = {"flex-container column " + props.class} >
    <div class="flex-container " id="store">
    <div className="flex-container store-img" style={{backgroundImage: `url(${src})`}}></div>

    </div>

<p className="line-height">
{props.name}<br/>
${price}
<div className="flex-container sizes">
  <div className="size-icon" onClick={sizeClick}>{small}</div>
  <div className="size-icon" onClick={sizeClick}>{light}</div>
  <div className="size-icon" onClick={sizeClick}>{medium}</div>
  <div className="size-icon" onClick={sizeClick}>{large}</div>
  <div className="size-icon" onClick={sizeClick}>{extra}</div>



</div>
</p>
<Box   mb="5%">
<ButtonUI variant="contained" color="secondary" className="store-button"  onClick={()=> { changeSize(); props.function(src, props.name , price, choosenSize  );props.change() }}   >
      Add to Cart
</ButtonUI>
</Box>


</div>







if (typeof props.display != "undefined"){

render =
    <div className = "flex-container columnM">
    <div class="flex-container " id="storeM">
    <div className="flex-container store-imgM" style={{backgroundImage: `url(${src})`}}></div>

    </div>

<p className="line-height">
{props.name}<br/>
${price}
<div className="flex-container sizesM">
  <div className="size-icon" onClick={sizeClick}>{small}</div>
  <div className="size-icon" onClick={sizeClick}>{light}</div>
  <div className="size-icon" onClick={sizeClick}>{medium}</div>
  <div className="size-icon" onClick={sizeClick}>{large}</div>
  <div className="size-icon" onClick={sizeClick}>{extra}</div>



</div>
</p>
<Box   mb="5%">
<ButtonUI variant="contained" color="secondary" className="store-buttonM"  onClick={()=> { changeSize(); props.function(src, props.name , price, choosenSize  );props.change() }}   >
      Add to Cart
</ButtonUI>
</Box>


</div>






}








  return(

<div>

{render}


</div>




  )

}



export default Store;

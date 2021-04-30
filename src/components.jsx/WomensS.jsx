import React, { useState } from "react";
import ButtonUI from '@material-ui/core/Button';
import Store from "./store";
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import {useSelector, useDispatch} from 'react-redux';
import {add} from './states';
import Cartm from './cart-menu'
function Womens(props){


  const handleOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };



  const [open, setOpen] = React.useState(false);
  const [modal, setModal]= React.useState(<Cartm   close= {handleClose}/>);

  const dispatch = useDispatch();


  function handleCart(cartSrc, cartName, cartPrice, size){



    if (typeof size === "undefined")  {


        var alert =
        <div class="flex-container alert">

        <p className="alert-texts"> Please select a size to Continue</p>

        </div>



        setModal(alert)




  }
  if  (typeof size !== "undefined"){
    var cartObject = {

    name: cartName,
    source: cartSrc,
    price: cartPrice,
    quantity: 1,
    size: size


    }

    dispatch(add(cartObject))

  setModal(<Cartm close= {handleClose}/>)



  }



  }






  return(
<Fade in={true}  timeout={ {enter: 1651}}>
    <div className="flex-container" id="collectionM">

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modal}
      </Modal>
      <Store
        name = "yellow blouse"

        function = {handleCart}
        change = {handleOpen}

        />
      <Store
        name = "dark pink shirt"

        function = {handleCart}
        change = {handleOpen}

        />
      <Store
        name = "red pokadot dress"

        function = {handleCart}
        change = {handleOpen}

        />

      <Store
        name = "black skinny jeans"

        function = {handleCart}
        change = {handleOpen}
        class="remove"
        />
      <div className="break popular-break"></div>
      <Store
        name = "white capris"

        function = {handleCart}
        change = {handleOpen}

        />
      <Store
        name = "gray dress pants"


        function = {handleCart}
        change = {handleOpen}
        />
      <Store
        name = "purple collared shirt"


        function = {handleCart}
        change = {handleOpen}
        />

      <Store
        name = "acid wash ripped blue jeans"

        class="remove"
        function = {handleCart}
        change = {handleOpen}
        />





    </div>
  </Fade>

  )

}



export default Womens;

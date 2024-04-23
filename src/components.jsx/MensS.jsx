import React, { useState } from "react";
import ButtonUI from '@material-ui/core/Button';
import Store from "./store";
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './states';
import Cartm from './cart-menu'

function Mens(props) {

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState(<Cartm page="menu" close={handleClose} />);

  const dispatch = useDispatch();
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
        size: size
      }

      dispatch(add(cartObject))

      setModal(<Cartm page="menu" close={handleClose} />)
    }
  }

  return (

    <Fade in={true} timeout={{ enter: 1651 }}>
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
          name="blue t-shirt"

          function={handleCart}
          change={handleOpen}

        />
        <Store
          name="white ripped jeans"

          function={handleCart}
          change={handleOpen}

        />
        <Store
          name="army cargo shorts"

          function={handleCart}
          change={handleOpen}

        />
        <Store
          name="yellow striped shirt"

          function={handleCart}
          change={handleOpen}
          class="remove"
        />
        <div className="break popular-break"></div>
        <Store
          name="blueX designed jeans"

          function={handleCart}
          change={handleOpen}

        />

        <Store
          name="red collared shirt"

          function={handleCart}
          change={handleOpen}

        />
        <Store
          name="pink kakkie shorts"

          function={handleCart}
          change={handleOpen}
        />

        <Store
          name="blue faded jeans"

          function={handleCart}
          change={handleOpen}
          class="remove"
        />
      </div>
    </Fade>
  )
}



export default Mens;

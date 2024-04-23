import React, { useState, useEffect } from "react";
import ButtonUI from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import Store from "./store";
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavRender from './nav';
import FooterRender from './footer-render'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import collections from "./../collections"
import Modal from '@material-ui/core/Modal';
import { add } from './states';
import Cartm from './cart-menu'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


function CollectionMain() {

  const handleOpenF = () => {
    setOpenF(true);
  };

  const handleCloseF = () => {
    setOpenF(false);
  };

  const [openfilter, setOpenF] = React.useState(false);
  var choice = useSelector(state => state.choice);


  var men = "Men"
  var women = "Women"

  var [productType, setType] = React.useState(<><div className="collection-choice">Shirts</div>
    <div className="collection-choice">Pants</div>
    <div className="collection-choice">Dresses</div>
  </>);

  var [collectionName, setCollecton] = React.useState("Women")
  var [choiceCheck, setChoice] = React.useState(false)
  var [shuffled, setShuffle] = React.useState("")
  var contentsShirtM = [];
  var contentsPantsM = [];
  var contentsShirtW = []
  var contentsPantsW = []
  var contentsWomen = []
  var contentsMen = []
  var dressW = []
  var topDefault = "Shirts"
  var bottomDefault = "Pants"
  var otherDefault = "Dresses"

  var topC = "ShirtsW"
  var bottomC = "PantsW"
  var otherC = "Dresses"
  var priceArray = [];
  var shortsM = []
  var contentsDefault = []
  var contentsChoiceW = []
  var contentsChoiceM = []
  var contentsChoiceType = [];
  var defaultRender = ""
  var choiceStateW = null
  var choiceStateM = null
  var firstChecked = null
  var secondChecked = null
  var thirdChecked = null
  var [search, setSearch] = React.useState()
  var searchArray = [];
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState();
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

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function priceSearch(price) {
    console.log("Price");
    priceArray = [];
    if (price === "30-60") {

      var priceContent = collections.images.filter(collection => {
        return collection.price > 29 && collection.price < 61
      })

      for (var i = 0; i < priceContent.length; i++) {
        priceArray[i] = <Store name={priceContent[i].name} display="main" rating={4} function={handleCart}
          change={handleOpen} />

      }

      var priceRender = <div className="flex-container collection-row">{priceArray}</div>
      setContent(priceRender)

    }
    if (price === "61-90") {

      var priceContent = collections.images.filter(collection => {
        return collection.price > 60 && collection.price < 91
      })

      for (var i = 0; i < priceContent.length; i++) {
        priceArray[i] = <Store name={priceContent[i].name} display="main" rating={4} function={handleCart}
          change={handleOpen} />

      }

      var priceRender = <div className="flex-container collection-row">{priceArray}</div>
      setContent(priceRender)

    }
    if (price === "91-130") {

      var priceContent = collections.images.filter(collection => {
        return collection.price > 90 && collection.price < 131
      })

      for (var i = 0; i < priceContent.length; i++) {
        priceArray[i] = <Store name={priceContent[i].name} display="main" rating={4} function={handleCart}
          change={handleOpen} />

      }

      var priceRender = <div className="flex-container collection-row">{priceArray}</div>
      setContent(priceRender)

    }
  }
  function name(search) {

    console.log(search);
    searchArray = [];

    var searchContent = collections.images.filter(collection => {
      return collection.name.includes(search)
    })

    for (var i = 0; i < searchContent.length; i++) {
      searchArray[i] = <Store name={searchContent[i].name} display="main" rating={4} function={handleCart}
        change={handleOpen} />

    }

    var searchRender = <div className="flex-container collection-row">{searchArray}</div>
    setContent(searchRender)
  }
  var womensDefault = collections.images.filter(collection => {
    return collection.gender === "Women"
  })
  var shuffledDefault = shuffle(womensDefault)
  for (var i = 0; i < shuffledDefault.length; i++) {
    contentsDefault[i] = <Store name={shuffledDefault[i].name} display="main" rating={4} function={handleCart}
      change={handleOpen} />

  }

  defaultRender = <div className="flex-container collection-row">{contentsDefault}</div>

  if (choice === 'Women') {
    var womensChoice = collections.images.filter(collection => {
      return collection.gender === "Women"
    })
    var shuffledChoice = shuffle(womensChoice)
    for (var i = 0; i < shuffledChoice.length; i++) {
      contentsChoiceW[i] = <Store name={shuffledChoice[i].name} display="main" rating={4} function={handleCart}
        change={handleOpen} />

    }

    defaultRender = <div className="flex-container collection-row">{contentsChoiceW}</div>

    choiceStateW = true
    console.log("women");
    topC = "ShirtsW"
    bottomC = "PantsW"
    otherC = "Dresses"
    topDefault = "Shirts"
    bottomDefault = "Pants"
    otherDefault = "Dresses"
  }
  if (choice === 'Men') {

    var mensChoice = collections.images.filter(collection => {
      return collection.gender === "Men"
    })
    collectionName = "Men"
    var shuffledChoice = shuffle(mensChoice)
    for (var i = 0; i < shuffledChoice.length; i++) {
      contentsChoiceM[i] = <Store name={shuffledChoice[i].name} display="main" rating={4} function={handleCart}
        change={handleOpen} />

    }

    defaultRender = <div className="flex-container collection-row">{contentsChoiceM}</div>
    choiceStateM = true
    console.log("Men");
    topC = "ShirtsM"
    bottomC = "PantsM"
    otherC = "shorts"
    topDefault = "Shirts"
    bottomDefault = "Pants"
    otherDefault = "Shorts"
  }
  if (choice === 'dresses') {

    var choiceType = collections.images.filter(collection => {
      return collection.gender === "Women" && collection.type === "dress"
    })

    for (var i = 0; i < choiceType.length; i++) {
      contentsChoiceType[i] = <Store name={choiceType[i].name} display="main" rating={4} function={handleCart}
        change={handleOpen} />

    }

    defaultRender = <div className="flex-container collection-row">{contentsChoiceType}</div>
    choiceStateW = true
    console.log("dresses");
    thirdChecked = true
    topC = "ShirtsW"
    bottomC = "PantsW"
    otherC = "Dresses"
    topDefault = "Shirts"
    bottomDefault = "Pants"
    otherDefault = "Dresses"
  }
  if (choice === 'pants') {

    var choiceType = collections.images.filter(collection => {
      return collection.gender === "Women" && collection.type === "pants"
    })

    for (var i = 0; i < choiceType.length; i++) {
      contentsChoiceType[i] = <Store name={choiceType[i].name} display="main" rating={4} function={handleCart}
        change={handleOpen} />

    }

    defaultRender = <div className="flex-container collection-row">{contentsChoiceType}</div>
    choiceStateW = true
    console.log("pants");
    secondChecked = true
    topC = "ShirtsW"
    bottomC = "PantsW"
    otherC = "Dresses"
    topDefault = "Shirts"
    bottomDefault = "Pants"
    otherDefault = "Dresses"

  }
  if (choice === 'shirts') {

    var choiceType = collections.images.filter(collection => {
      return collection.gender === "Men" && collection.type === "shirts"
    })

    for (var i = 0; i < choiceType.length; i++) {
      contentsChoiceType[i] = <Store name={choiceType[i].name} display="main" rating={4} function={handleCart}
        change={handleOpen} />

    }

    defaultRender = <div className="flex-container collection-row">{contentsChoiceType}</div>
    choiceStateM = true
    console.log("shirts");
    firstChecked = true
    topC = "ShirtsM"
    bottomC = "PantsM"
    otherC = "shorts"
    topDefault = "Shirts"
    bottomDefault = "Pants"
    otherDefault = "Shorts"
  }

  var [contentRender, setContent] = React.useState(defaultRender)

  var [checkedMainW, setCheckedMainW] = React.useState(choiceStateW)
  var [checkedMainM, setCheckedMainM] = React.useState(choiceStateM)
  var [checked1M, setChecked1M] = React.useState(firstChecked)
  var [checked2M, setChecked2M] = React.useState(secondChecked)
  var [checked3M, setChecked3M] = React.useState(thirdChecked)
  var [topChoice, setTopC] = React.useState(topC)
  var [bottomChoice, setBottomC] = React.useState(bottomC)
  var [otherChoice, setOtherC] = React.useState(otherC)
  var [top, setTop] = React.useState(topDefault)
  var [bottom, setBottom] = React.useState(bottomDefault)
  var [other, setOther] = React.useState(otherDefault)

  function change(event) {
    if (event.target.id === "shirts") {
      setChecked1M(!checked1M);
      setChecked2M(false)
      setChecked3M(false)
    }
    if (event.target.id === "pants") {
      setChecked1M(false);
      setChecked2M(!checked2M)
      setChecked3M(false)


    }
    if (event.target.id === "other") {
      setChecked1M(false);
      setChecked2M(false)
      setChecked3M(!checked3M)

    }
  }
  function changeSection(event, section) {

    if (section === "Men") {
      setCheckedMainM(!checkedMainM)
      setCheckedMainW(false)
      setChecked1M(false);
      setChecked2M(false)
      setChecked3M(false)
      setCollecton("Men")
      setOther("shorts")
      setTopC("ShirtsM")
      setBottomC("PantsM")
      setOtherC("shorts")
      console.log("yes");
    }
    if (section === "Women") {
      setCheckedMainW(!checkedMainW)
      setCheckedMainM(false)
      setChecked1M(false);
      setChecked2M(false)
      setChecked3M(false)
      setCollecton("Women")
      setOther("dresses")
      setTopC("ShirtsW")
      setBottomC("PantsW")
      setOtherC("Dresses")
      console.log("yes");
    }
  }

  function changeProduct(event, choice) {

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }


    function resetContent(gender) {


      if (gender === "Men") {

        var resetContent = []
        var resetDisplayM = collections.images.filter(collection => {
          return collection.gender === "Men"
        })
        var shuffledReset = shuffle(resetDisplayM)
        for (var i = 0; i < shuffledReset.length; i++) {
          resetContent[i] = <Store name={shuffledReset[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />

        }

        var resetRender = <div className="flex-container collection-row">{resetContent}</div>
        setContent(resetRender)

      }
      if (gender === "Women") {

        var resetContent = []
        var resetDisplayW = collections.images.filter(collection => {
          return collection.gender === "Men"
        })
        var shuffledReset = shuffle(resetDisplayW)
        for (var i = 0; i < shuffledReset.length; i++) {
          resetContent[i] = <Store name={shuffledReset[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />

        }

        var resetRender = <div className="flex-container collection-row">{resetContent}</div>
        setContent(resetRender)
      }

    }

    if (choice === "Women") {

      if (event.target.checked === true) {
        console.log("shirt");

        setContent([])
        var womensCollection = collections.images.filter(collection => {
          return collection.gender === "Women"
        })
        var shuffledW = shuffle(womensCollection)
        for (var i = 0; i < shuffledW.length; i++) {
          contentsWomen[i] = <Store name={shuffledW[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />

        }

        var womenRender = <div className="flex-container collection-row">{contentsWomen}</div>
        setContent(womenRender)

      }

    }
    if (choice === "Men") {
      if (event.target.checked === true) {
        console.log("shirt");

        setContent([])
        var mensCollection = collections.images.filter(collection => {
          return collection.gender === "Men"
        })
        var shuffledM = shuffle(mensCollection)
        for (var i = 0; i < shuffledM.length; i++) {
          contentsMen[i] = <Store name={shuffledM[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />

        }

        var menRender = <div className="flex-container collection-row">{contentsMen}</div>
        setContent(menRender)

      }

    }



    if (choice === "ShirtsM") {

      if (event.target.checked === false) {
        resetContent("Men")

      }
      if (event.target.checked === true) {
        console.log("shirt");

        setContent([])
        var shirtResultM = collections.images.filter(collection => {
          return collection.type === "shirts" && collection.gender === "Men"
        })

        for (var i = 0; i < shirtResultM.length; i++) {
          contentsShirtM[i] = <Store name={shirtResultM[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />

        }

        var menShirts = <div className="flex-container collection-row">{contentsShirtM}</div>
        setContent(menShirts)

      }

    }



    if (choice === "PantsM") {
      if (event.target.checked === false) {

        resetContent("Men")

      }
      if (event.target.checked === true) {
        console.log("pants");
        setContent([])
        var pantsResultM = collections.images.filter(collection => {
          return collection.type === "pants" && collection.gender === "Men"
        })

        for (var i = 0; i < pantsResultM.length; i++) {
          contentsPantsM[i] = <Store name={pantsResultM[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />

        }

        var menPants = <div className="flex-container collection-row">{contentsPantsM}</div>
        setContent(menPants)
      }
    }

    if (choice === "shorts") {
      if (event.target.checked === false) {
        resetContent("Men")
      }
      if (event.target.checked === true) {
        console.log("other");
        setContent([])
        var shortResultM = collections.images.filter(collection => {
          return collection.type === "shorts" && collection.gender === "Men"
        })

        for (var i = 0; i < shortResultM.length; i++) {
          shortsM[i] = <Store name={shortResultM[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />

        }

        var menShorts = <div className="flex-container collection-row">{shortsM}</div>
        setContent(menShorts)

      }

    }

    if (choice === "ShirtsW") {
      if (event.target.checked === false) {

        resetContent("Women")
      }
      if (event.target.checked === true) {
        console.log("shirtW");

        setContent([])
        var shirtResultW = collections.images.filter(collection => {
          return collection.type === "shirts" && collection.gender === "Women"
        })

        for (var i = 0; i < shirtResultW.length; i++) {
          contentsShirtW[i] = <Store name={shirtResultW[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />
        }
        var womenShirts = <div className="flex-container collection-row">{contentsShirtW}</div>
        setContent(womenShirts)
      }
    }

    if (choice === "PantsW") {
      if (event.target.checked === false) {

        resetContent("Women")

      }
      if (event.target.checked === true) {
        console.log("pantsW");
        setContent([])
        var pantsResultW = collections.images.filter(collection => {
          return collection.type === "pants" && collection.gender === "Women"
        })

        for (var i = 0; i < pantsResultW.length; i++) {
          contentsPantsW[i] = <Store name={pantsResultW[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />
        }

        var womenPants = <div className="flex-container collection-row">{contentsPantsW}</div>
        setContent(womenPants)

      }

    }

    if (choice === "Dresses") {
      if (event.target.checked === false) {

        resetContent("Women")

      }
      if (event.target.checked === true) {
        console.log("otherW");
        setContent([])
        var dressResultW = collections.images.filter(collection => {
          return collection.type === "dress" && collection.gender === "Women"
        })

        for (var i = 0; i < dressResultW.length; i++) {
          dressW[i] = <Store name={dressResultW[i].name} display="main" rating={4} function={handleCart}
            change={handleOpen} />
        }

        var womenDress = <div className="flex-container collection-row">{dressW}</div>
        setContent(womenDress)

      }
    }
  }

  return (<div>

    <NavRender />
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {modal}
    </Modal>
    < div className=" flex-container col-mainTitle" > {collectionName} <div className="flex-container filter" onClick={() => handleOpenF()}><FontAwesomeIcon icon={faFilter} size="1x" />Show filter</div></div>
    <Modal
      open={openfilter}
      onClose={handleCloseF}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="flex-container collection-wrapper">
        <div className="flex-container collection-menu1">

          <div className="flex-container collection-Margin">
            <div className="menu-title">Collection</div>

            <div className="collection-choice">
              <input id="Womencheck" type="checkbox" checked={checkedMainW} onClick={(event) => changeSection(event, "Women")} onChange={(event) => changeProduct(event, "Women")} /> Womens
            </div>

            <div className="collection-choice" >
              <input id="Mencheck" type="checkbox" checked={checkedMainM} onClick={(event) => changeSection(event, "Men")} onChange={(event) => changeProduct(event, "Men")} /> Mens
            </div>


          </div>
          <div className="flex-container collection-Margin">
            <div className="menu-title">Product Type</div>

            <div className="collection-choice" >
              <input type="checkbox" className="check-choice" id="shirts" onClick={(event) => change(event)} onChange={(event) => changeProduct(event, topChoice)} checked={checked1M} /> {top}
            </div>
            <div className="collection-choice" >
              <input type="checkbox" className="check-choice" id="pants" onClick={(event) => change(event)} onChange={(event) => changeProduct(event, bottomChoice)} checked={checked2M} /> {bottom}
            </div>
            <div className="collection-choice" >
              <input type="checkbox" className="check-choice" id="other" onClick={(event) => change(event)} onChange={(event) => changeProduct(event, otherChoice)} checked={checked3M} /> {other}
            </div>

          </div>
          <div className="flex-container collection-Margin">
            <div className="menu-title">Search</div>
            <div className="flex-container">


              <input type="text" className="search-box" onChange={e => setSearch(e.target.value)} />

              <ButtonUI variant="outlined" onClick={() => name(search)} color="secondary" style={{ width: "10%", fontSize: "11px" }}   >
                Search
              </ButtonUI>
            </div>
          </div>
          <div className="flex-container collection-Margin">
            <div className="menu-title">Price</div>
            <div className="collection-choice" onClick={() => priceSearch("30-60")}>$30-60</div>
            <div className="collection-choice" onClick={() => priceSearch("61-90")}>$61-90</div>
            <div className="collection-choice" onClick={() => priceSearch("91-130")}>$91-$130</div>

          </div>

          <Box width="82%" >
            <Link to={`/cart`}><ButtonUI variant="outlined" color="secondary" style={{ width: "100%", fontSize: "11px" }}   >
              View you cart
            </ButtonUI></Link>
          </Box>


          <div className="flex-container shoe-ad">
            <div className="flex-container shoe-text">
              Shoe collection <br />coming soon!
            </div>
          </div>
        </div>

      </div>
    </Modal>
    <div className="flex-container " id="collectionMain" >
      <div className="flex-container collection-wrapper1">
        <div className="flex-container collection-menu">
          <div className="flex-container collection-Margin">
            <div className="menu-title">Collection</div>

            <div className="collection-choice">
              <input id="Womencheck" type="checkbox" checked={checkedMainW} onClick={(event) => changeSection(event, "Women")} onChange={(event) => changeProduct(event, "Women")} /> Womens
            </div>
            <div className="collection-choice" >
              <input id="Mencheck" type="checkbox" checked={checkedMainM} onClick={(event) => changeSection(event, "Men")} onChange={(event) => changeProduct(event, "Men")} /> Mens
            </div>
          </div>
          <div className="flex-container collection-Margin">
            <div className="menu-title">Product Type</div>

            <div className="collection-choice" >
              <input type="checkbox" className="check-choice" id="shirts" onClick={(event) => change(event)} onChange={(event) => changeProduct(event, topChoice)} checked={checked1M} /> {top}
            </div>
            <div className="collection-choice" >
              <input type="checkbox" className="check-choice" id="pants" onClick={(event) => change(event)} onChange={(event) => changeProduct(event, bottomChoice)} checked={checked2M} /> {bottom}
            </div>
            <div className="collection-choice" >
              <input type="checkbox" className="check-choice" id="other" onClick={(event) => change(event)} onChange={(event) => changeProduct(event, otherChoice)} checked={checked3M} /> {other}
            </div>

          </div>
          <div className="flex-container collection-Margin">
            <div className="menu-title">Search</div>
            <div className="flex-container">
              <input type="text" className="search-box" onChange={e => setSearch(e.target.value)} />
              <ButtonUI variant="outlined" onClick={() => name(search)} color="secondary" style={{ width: "10%", fontSize: "11px" }}   >
                Search
              </ButtonUI>
            </div>
          </div>
          <div className="flex-container collection-Margin">
            <div className="menu-title">Price</div>
            <div className="collection-choice" onClick={() => priceSearch("30-60")}>$30-60</div>
            <div className="collection-choice" onClick={() => priceSearch("61-90")}>$61-90</div>
            <div className="collection-choice" onClick={() => priceSearch("91-130")}>$91-$130</div>
          </div>

          <Box width="82%" >
            <Link to={`/cart`}><ButtonUI variant="outlined" color="secondary" style={{ width: "100%", fontSize: "11px" }}   >
              View you cart
            </ButtonUI></Link>
          </Box>

          <div className="flex-container shoe-ad">
            <div className="flex-container shoe-text">
              Shoe collection <br />coming soon!
            </div>
          </div>
        </div>
      </div>

      <div className="flex-container collection-list">
        {contentRender}
      </div>
    </div>
    <FooterRender />
  </div>)

}

export default CollectionMain;

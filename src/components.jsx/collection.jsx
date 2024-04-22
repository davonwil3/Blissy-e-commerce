import React, { useState } from "react";
import ButtonUI from '@material-ui/core/Button';
import Store from "./store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import Fade from '@material-ui/core/Fade';
import Mens from "./MensS";
import Womens from "./WomensS";
import Carousel from 'react-bootstrap/Carousel';
import Testimonial from './testimonials';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

function Collection() {
  var [storeContent, setContent] = React.useState(<Mens />);

  var handleStoreM = () => {
    var storeC = <Mens />;
    setContent(storeC);
  };

  var handleStoreW = () => {
    var storeC = <Womens />;
    setContent(storeC);
  };

  return (
    <div>
      <div className="flex-container " id="collection">
        <div className="flex-container " id="about-sec">
          <div className="flex-container" id="icons">
            <div className="flex-container icon-column">
              <FontAwesomeIcon icon={faShippingFast} size="2x" />
              <p className="icon-text">Free Shipping</p>
              <p className="icon-des">Blissy has fast and free shipping!</p>
            </div>
            <div className="flex-container icon-column">
              <FontAwesomeIcon icon={faShoppingBag} size="2x" />
              <p className="icon-text">Great deals</p>
              <p className="icon-des">The best deals on the internet</p>
            </div>
            <div className="flex-container icon-column quality-margin">
              <FontAwesomeIcon icon={faTshirt} size="2x" />
              <p className="icon-text">Premium Quality</p>
              <p className="icon-des">Great quality items and great price!</p>
            </div>
          </div>
          <div className="testimonials">
            <Carousel id="test-carousel">
              <Carousel.Item>
                <div className="flex-container test-row">
                  <Testimonial
                    text="I primarily shop for clothes online, and Blissy is one of my favourites. I love being able to trust that anything I order from Blissy is always beautiful when it arrives. The quality of their clothing is impeccable."
                    author="Ashley"
                  />
                  <Testimonial
                    text="Blissy is absolutely AMAZING! I love this store because they offer beautiful, high quality clothing that I can’t find anywhere else. Plus their customer support is awesome which makes the shopping experience fantastic!"
                    author="Latoya"
                    class="rid"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="flex-container test-row">
                  <Testimonial
                    text="Blissy stocks the best dresses, shirts and jeans. I order almost all my clothing online - and Blissy never lets me down. The best quality and selection"
                    author="Radha"
                  />
                  <Testimonial
                    text="Blissy has rapidly become my favourite place to order clothes online. I can shop safe in the knowledge that the clothing will be top quality and true to the thorough online description. Fast shipping plus awesome prices has me hooked!"
                    author="Mike"
                    class="rid"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="break"></div>
        <div className="flex-container" id="collectionS">
          <div className="title-style"></div>
          <p className="store-title">Our Collection</p>
          <div className="title-style"></div>
          <div className="break"></div>
          <p className="store-des M" onClick={() => handleStoreM()}>
            Men's
          </p>
          <p className="store-des W" onClick={() => handleStoreW()}>
            Women's
          </p>
          <div className="break"></div>
          {storeContent}
          <Box mt="1%" ml="auto" mr="auto" mb="" width="200px" height="35px">
            <Link to={`/collection`}>
              <ButtonUI
                variant="outlined"
                color="secondary"
                style={{ height: "100%", width: "100%", fontSize: "11px" }}
              >
                Show More
              </ButtonUI>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Collection;

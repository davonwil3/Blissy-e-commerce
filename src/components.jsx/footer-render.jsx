import React, { useState } from "react";
import ButtonUI from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Carousel from 'react-bootstrap/Carousel';
import Blog from './blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faPhoneAlt } from '@fortawesome/pro-light-svg-icons';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";

function FooterRender(props) {
  if (props.section === "mainpage") {
    var display = "footer-infoM";
    console.log("main");
  } else {
    var display = "footer-info";
    console.log("regular");
  }

  return (
    <div className="flex-container" id={display}>
      <div className="flex-container footer-brand">
        <p className="brand-title"> Blissy</p>
        <p className="footer-text">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="lg"
            className="footer-icon"
          />{" "}
          78 Baron Ave, WestBabylon, NY 11704{" "}
        </p>
        <p className="footer-text">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="footer-icon"
          />{" "}
          blissy@gmail.com
        </p>
        <p className="footer-text">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            size="lg"
            className="footer-icon"
          />{" "}
          +631 504 9714
        </p>
        <p className="footer-text">
          <FontAwesomeIcon
            icon={faFacebookF}
            size="md"
            className="social-icon"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="md"
            className="social-icon"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="md"
            className="social-icon"
          />
          <FontAwesomeIcon
            icon={faPinterestP}
            size="md"
            className="social-icon"
          />
        </p>
      </div>

      <div className="flex-container footer-list">
        <p className="footer-title"> Shop</p>
        <p className="footer-text">Full collection</p>
        <p className="footer-text">Men's Collection</p>
        <p className="footer-text">Women'sCollection</p>
        <p className="footer-text">New In</p>
        <p className="footer-text">On Sale</p>
      </div>

      <div className="flex-container footer-list">
        <p className="footer-title"> Information</p>
        <p className="footer-text">About Us</p>
        <p className="footer-text">Blog</p>
        <p className="footer-text">Contact Us</p>
        <p className="footer-text">Privacy Policy</p>
      </div>

      <div className="flex-container footer-list">
        <p className="footer-title"> Order</p>
        <p className="footer-text">My account</p>
        <p className="footer-text">View Cart</p>
        <p className="footer-text">FAQs</p>
      </div>
    </div>
  );
}

export default FooterRender;

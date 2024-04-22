import React, { useState, useEffect } from "react";
import NavRender from './nav';
import FooterRender from './footer-render';
import MapRender from './Map';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div>
      <NavRender />
      <div className="flex-container" id="contact-page">
        <div className="flex-container footer-brandContact">
          <p className="brand-title">Blissy</p>
          <p className="footer-text">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="footer-icon" /> 78 Baron Ave, WestBabylon, NY 11704
          </p>
          <p className="footer-text">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="footer-icon" /> blissy@gmail.com
          </p>
          <p className="footer-text">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="footer-icon" /> +631 504 9714
          </p>
          <p className="footer-text">
            <FontAwesomeIcon icon={faFacebookF} size="md" className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} size="md" className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} size="md" className="social-icon" />
            <FontAwesomeIcon icon={faPinterestP} size="md" className="social-icon" />
          </p>
        </div>
        <MapRender />
      </div>
      <FooterRender />
    </div>
  );
}

export default Contact;

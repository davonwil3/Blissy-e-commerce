import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


function Location (){










return(


  <div className="pin">
      <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="pin-icon"/>
    <p className="pin-text">78 Claremont Ave <br/>West Babylon NY<br/>11704</p>
    </div>





)







}


export default Location;

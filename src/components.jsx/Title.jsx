import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {  NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ButtonUI from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/pro-light-svg-icons';
import {faShoppingCart} from '@fortawesome/pro-light-svg-icons';
import {faUser} from '@fortawesome/pro-light-svg-icons';
import NavRender from './nav';
import { Link } from 'react-router-dom';

function Title(){

return(
<div id="Header">

<NavRender/>




<div class="flex-container" id="banner">











<div class = "header-content flex-container">

  <p class="title">Blissy</p>
<p class="title-fun">deals that make you smile</p>
      <Link to={`/collection`}  ><ButtonUI variant="contained" color="secondary" className="sub-button" id="header-btn" >
          Shop Now
    </ButtonUI>
  </Link>
  </div>





</div>














</div>

)


}


export default Title;

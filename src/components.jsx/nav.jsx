import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ButtonUI from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons'
import { faShoppingCart } from '@fortawesome/pro-light-svg-icons'
import { faUser } from '@fortawesome/pro-light-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { collection } from './states';
function NavRender() {

  const dispatch = useDispatch();

  function setCollection(gender) {
    dispatch(collection({ choice: gender }))
  }

  return (
    <div class="navigation">
      <Navbar className="nav-bg " variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" class="hamburger" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-padding" >
            <Navbar.Brand className="nav-brand brand"><Link to={`/`} style={{ color: 'black' }}><p class="nav-text ">Blissy</p></Link></Navbar.Brand>
            <Nav.Link  ><Link to={`/about`} style={{ color: 'gray' }}><p class="nav-text ">About</p></Link></Nav.Link>
            <Nav.Link ><Link to={`/collection`} style={{ color: 'gray' }} onClick={() => setCollection("Women")}><p class="nav-text">Women</p></Link></Nav.Link>
            <Nav.Link ><Link to={`/collection`} style={{ color: 'gray' }} onClick={() => setCollection("Men")}><p class="nav-text">Men</p></Link></Nav.Link>
            <Nav.Link ><Link to={`/contact`} style={{ color: 'gray' }}><p class="nav-text">Contact</p></Link></Nav.Link>
            <Nav.Link ><Link to={`/checkout`} style={{ color: 'gray' }}><p class="nav-text">Checkout</p></Link></Nav.Link>
            <Nav.Link className="icon-margin"><Link to={`/cart`} style={{ color: 'gray' }}><FontAwesomeIcon icon={faSearch} size="1x" /></Link></Nav.Link>
            <Nav.Link ><Link to={`/cart`} style={{ color: 'gray' }}><FontAwesomeIcon icon={faShoppingCart} size="1x" /></Link></Nav.Link>
            <Nav.Link ><Link to={`/cart`} style={{ color: 'gray' }}><FontAwesomeIcon icon={faUser} size="1x" /></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default NavRender;

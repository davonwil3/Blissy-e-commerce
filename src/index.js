import React from 'react';
import ReactDOM from 'react-dom';
import Title from "./components.jsx/Title";
import Popular from "./components.jsx/popular-items";
import Collection from "./components.jsx/collection";
import Footer from "./components.jsx/footer";
import { Provider } from 'react-redux';
import store from './components.jsx/states'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routing from './components.jsx/Routing';





ReactDOM.render(<Routing/>, document.getElementById("App"));

import React from 'react';
import ReactDOM from 'react-dom';
import Title from "./Title";
import Popular from "./popular-items";
import Collection from "./collection";
import Footer from "./footer";
import { Provider } from 'react-redux';
import store from './states';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './cart';
import collectionMain from './entire-collection';
import Checkout from './checkout';
import About from "./about";
import Contact from "./contact";

function Routing() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/collection" exact component={collectionMain}></Route>
          <Route path="/checkout" exact component={Checkout}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
      </Provider>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Title />
      <Popular />
      <Collection />
      <Footer />
    </div>
  );
}

export default Routing;

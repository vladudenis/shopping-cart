import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";
import ShopItem from "./components/ShopItem";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Home from "./components/Home";
import styled from 'styled-components';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={ShopItem} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
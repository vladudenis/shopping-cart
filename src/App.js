import React, { useState }  from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";
import ShopItemView from "./components/ShopItemView";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Home from "./components/Home";

const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return(
    <BrowserRouter>
      <div>
        <Nav cartItems={cartItems} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:item" 
                render={
                  (props) => <ShopItemView 
                  src={props.location.state.src} 
                  name={props.location.state.name} 
                  shorthand={props.location.state.shorthand} 
                  addToCart={addToCart}/>
                }               
          />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
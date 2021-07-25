import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";
import ShopItemView from "./components/ShopItemView";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { coins } from "./data/Coins";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newCartItem) => {
    const alreadyInCart = cartItems
      .map((cartItem) => cartItem.shorthand)
      .includes(newCartItem.shorthand);
    if(alreadyInCart){
      changeQuantity(newCartItem, newCartItem.qty);
    }else{
      setCartItems([...cartItems, newCartItem]);
    }
  }

  const removeFromCart = (cartItem) => {
    setCartItems(cartItems.filter((item) => item.shorthand !== cartItem.shorthand));
  }

  const changeQuantity = (thisItem, newValue) => {
    setCartItems(
      cartItems.map(
        (item) => (item.shorthand === thisItem.shorthand ? {...item, qty: newValue} : item)
      )
    )
  }

  const findCoin = (shorthand) => coins.find((coin) => coin.shorthand === shorthand);

  return(
    <BrowserRouter>
      <Nav cartItems={cartItems.length} />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/shop">
          <Shop coins={coins} />
        </Route>
        <Route exact path="/shop/:item" 
          render={
            (props) => 
              <ShopItemView 
                item={findCoin(props.location.state.shorthand)}  
                addToCart={addToCart}
              />
          }               
        />
        <Route exact path="/cart">
          <Cart 
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
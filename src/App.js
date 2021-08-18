import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { coins } from "./data/Coins";

const App = () => {
  const [shopCoins, setShopCoins] = useState(coins);
  const [cartItems, setCartItems] = useState([]);

  const changeQuantityShop = (thisItem, newValue) => {
    setShopCoins(
      shopCoins.map(
        (coin) => (coin.shorthand === thisItem.shorthand ? {...coin, qty: newValue} : coin)
      )
    )
  }

  const addToCart = (newCartItem) => {
    const alreadyInCart = cartItems
      .map((cartItem) => cartItem.shorthand)
      .includes(newCartItem.shorthand);
    if(alreadyInCart){
      changeQuantityCart(newCartItem, newCartItem.qty);
    }else{
      setCartItems([...cartItems, newCartItem]);
    }
  }

  const removeFromCart = (cartItem) => {
    setCartItems(cartItems.filter((item) => item.shorthand !== cartItem.shorthand));
  }

  const changeQuantityCart = (thisItem, newValue) => {
    setCartItems(
      cartItems.map(
        (item) => (item.shorthand === thisItem.shorthand ? {...item, qty: newValue} : item)
      )
    )
  }

  const findCoin = (shorthand) => shopCoins.find((coin) => coin.shorthand === shorthand);

  return(
    <BrowserRouter>
      <Nav cartItems={cartItems.length} />
      <Switch>
        <Route exact path="/shopping-cart" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop">
          <Shop 
            coins={shopCoins} 
            addToCart={addToCart} 
            findCoin={findCoin}
            changeQuantity={changeQuantityShop}
          />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart">
          <Cart 
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            findCoin={findCoin}
            changeQuantity={changeQuantityCart}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
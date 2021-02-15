import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

//components
import Nav from "./components/Nav";
import CheckOut from "./components/CheckOut";
import Tours from "./components/Tours";
import Home from "./components/Home";
import TourDetails from "./components/TourDetails";

//data
import toursData from "./assets/toursData.js";

const StyledApp = styled.div`
  margin-top: 60px;
`;

function App() {
  const [cartItems, setCartItems] = useState(
    toursData.map((tour) => {
      return { ...tour, count: 0 };
    })
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const handleCartChanged = (e, tour, count) => {
    e.preventDefault();
    let newCart = [...cartItems];
    const index = cartItems.findIndex((item) => item.fileName === tour);
    newCart[index].count = count;
    setCartItems(newCart);
  };

  useEffect(() => {
    let price = cartItems.reduce(
      (accumulator, current) => +accumulator + current.count * current.price,
      0
    );
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <StyledApp className="App">
      <Nav cartItems={cartItems} total={totalPrice} />
      <Switch>
        <Route path="/checkout">
          <CheckOut
            cartItems={cartItems}
            total={totalPrice}
            onAddToCart={handleCartChanged}
          />
        </Route>
        <Route path={"/tours/:tourName"}>
          <TourDetails toursData={cartItems} onAddToCart={handleCartChanged} />
        </Route>
        <Route exact path="/tours">
          <Tours toursData={toursData} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </StyledApp>
  );
}

export default App;

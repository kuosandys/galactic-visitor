import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import CheckOut from "./components/CheckOut";
import Tours from "./components/Tours";
import Home from "./components/Home";
import TourDetails from "./components/TourDetails";
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
  const [currentItem, setCurrentItem] = useState("");
  const [currentItemCount, setCurrentItemCount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCartChanged = (e) => {
    e.preventDefault();
    let newCart = [...cartItems];
    const index = cartItems.findIndex((item) => item.fileName === currentItem);
    newCart[index].count = currentItemCount;
    setCartItems(newCart);
  };

  const handleItemsChanged = (e) => {
    setCurrentItemCount(+e.target.value);
    setCurrentItem(e.target.name);
  };

  useEffect(() => {
    let count = cartItems.reduce(
      (accumulator, current) => +accumulator + current.count * current.price,
      0
    );
    setTotal(count);
  }, [cartItems]);

  return (
    <StyledApp className="App">
      <Nav cartItems={cartItems} total={total} />
      <Switch>
        <Route path="/checkout">
          <CheckOut
            cartItems={cartItems}
            total={total}
            onAddToCart={handleCartChanged}
            onInputChanged={handleItemsChanged}
          />
        </Route>
        <Route path={"/tours/:tourName"}>
          <TourDetails
            toursData={cartItems}
            onAddToCart={handleCartChanged}
            onInputChanged={handleItemsChanged}
          />
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

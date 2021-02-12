import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Tours from "./components/Tours";
import Home from "./components/Home";
import TourDetails from "./components/TourDetails";
import toursData from "./components/toursData.js";

const StyledApp = styled.div`
  margin-top: 60px;
`;

function App() {
  const [cartItems, setCartItems] = useState(0);
  return (
    <StyledApp className="App">
      <Nav items={cartItems} />
      <Switch>
        <Route path="/cart">
          <Cart items={cartItems} />
        </Route>
        <Route path={"/tours/:tourName"}>
          <TourDetails toursData={toursData} />
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

import React from "react";
import { Link } from "react-router-dom";
import { HomeDiv, ToursLink } from "./HomeStyled";

function Home() {
  return (
    <HomeDiv>
      <h1>The galaxy at your fingertips</h1>
      <Link to="/tours">
        <ToursLink>Explore Our Tours</ToursLink>
      </Link>
    </HomeDiv>
  );
}

export default Home;

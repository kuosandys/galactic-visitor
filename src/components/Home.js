import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/images/ceres.jpg";

const HomeDiv = styled.div`
  height: 100vh;
  background-image: url(${background});
`;

function Home() {
  return (
    <HomeDiv>
      <h1>The galaxy at your fingertips</h1>
      <Link to="/tours">Explore Our Tours</Link>
    </HomeDiv>
  );
}

export default Home;

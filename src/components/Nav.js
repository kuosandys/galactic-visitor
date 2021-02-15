import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cart, CartDetails } from "./Cart";

const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  background-color: teal;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    margin: 0;
  }

  .navHome {
    font-size: 30px;
    font-weight: 700;
  }

  .navLinks {
    font-size: 20px;
    margin: 10px;

    i {
      margin-right: 7px;
    }
  }
`;

function Nav(props) {
  const { cartItems, total } = props;
  const [expandCartView, setExpandCartView] = useState(false);

  const handleExpandCart = () => {
    setExpandCartView(!expandCartView);
  };

  return (
    <StyledNav>
      <Link to="/" className="navHome">
        Galactic Visitor
      </Link>
      <div className="navLinks">
        <Cart cartItems={cartItems} onExpandCart={handleExpandCart} />
      </div>
      {expandCartView && <CartDetails cartItems={cartItems} total={total} />}
    </StyledNav>
  );
}

export default Nav;

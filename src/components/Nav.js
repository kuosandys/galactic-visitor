import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cart, CartDetails } from "./Cart";
import { useMediaQuery } from "react-responsive";

const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.mainColor};
  padding: 10px 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.bottomShadow};
  z-index: 10;

  * {
    margin: 0;
    color: ${(props) => props.theme.lightTextColor};
  }

  .navHome {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: -0.7px;

    i {
      margin-right: 7px;
    }
  }

  .navLinks {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;

    .navLink {
      margin: 0 10px;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

function Nav(props) {
  const { cartItems, total } = props;
  const [expandCartView, setExpandCartView] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  const handleExpandCart = () => {
    setExpandCartView(!expandCartView);
  };

  return (
    <StyledNav>
      <Link to="/" className="navHome">
        <i className="fas fa-stroopwafel"></i>
        Galactic Visitor
      </Link>
      <div className="navLinks">
        {!isSmallScreen && (
          <Link className="navLink" to="/tours">
            Tours
          </Link>
        )}
        <Cart
          className="cart"
          cartItems={cartItems}
          onExpandCart={handleExpandCart}
          cartExpanded={expandCartView}
        />
      </div>
      {expandCartView && (
        <CartDetails className="cart" cartItems={cartItems} total={total} />
      )}
    </StyledNav>
  );
}

export default Nav;

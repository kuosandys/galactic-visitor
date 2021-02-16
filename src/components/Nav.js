import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cart, CartDetails } from "./Cart";
import { useMediaQuery } from "react-responsive";
import { StyledNav } from "./NavStyled";

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

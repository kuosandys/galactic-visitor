import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { CartDetailsDiv, CartItemStyled, CartIcon } from "./CartStyled";
import StyledButton from "../common/StyledButton";

function Cart(props) {
  const { cartItems, onExpandCart, cartExpanded } = props;
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = cartItems.reduce(
      (accumulator, current) => +accumulator + current.count,
      0
    );
    setCartCount(count);
  }, [cartItems]);

  return (
    <div>
      <CartIcon onClick={onExpandCart} className={cartExpanded ? "active" : ""}>
        <i className="fas fa-rocket"></i>
        <span>{cartCount}</span>
      </CartIcon>
    </div>
  );
}

function CartDetails(props) {
  const { cartItems, total, handleClickOutside } = props;
  const ref = useRef();
  const buttonRef = useRef();

  const handleClick = (e) => {
    if (
      !ref.current ||
      !ref.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
      handleClickOutside();
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <CartDetailsDiv ref={ref}>
      <p>
        Total: <span>${total}</span>
      </p>
      {cartItems.map((item) => {
        if (item.count > 0) {
          return (
            <CartItem
              key={uniqid()}
              fileName={item.fileName}
              image={item.imageFile}
              name={item.name}
              count={item.count}
              price={item.price}
            />
          );
        } else {
          return null;
        }
      })}
      <Link to="/checkout">
        {" "}
        <StyledButton ref={buttonRef}>Check Out </StyledButton>
      </Link>
    </CartDetailsDiv>
  );
}

function CartItem(props) {
  return (
    <CartItemStyled>
      <img src={props.image} alt=""></img>
      <Link to={`tours/${props.fileName}`}>{props.name}</Link>
      <p>
        <span>{props.count}</span> x <span>${props.price}</span>
      </p>
    </CartItemStyled>
  );
}

export { Cart, CartDetails };

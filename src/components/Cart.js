import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledButton from "./StyledButton";

const CartDetailsDiv = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 5;

  border: 1px solid teal;
  padding: 10px;
`;

function Cart(props) {
  const { cartItems, onExpandCart } = props;
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
      <button onClick={onExpandCart}>
        <i className="fas fa-rocket"></i>
        <span>{cartCount}</span>
      </button>
    </div>
  );
}

function CartDetails(props) {
  const { cartItems, total } = props;
  return (
    <CartDetailsDiv>
      <CartTable cartItems={cartItems} total={total} />
      <Link to="/checkout">
        <StyledButton>Check Out</StyledButton>
      </Link>
    </CartDetailsDiv>
  );
}

function CartTable(props) {
  const { cartItems, total } = props;

  return (
    <table>
      <thead>
        <tr>
          <td>Item</td>
          <td>Quantity</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          if (item.count > 0) {
            return (
              <tr key={uniqid()}>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>${item.count * item.price}</td>
              </tr>
            );
          } else {
            return null;
          }
        })}
        <tr>
          <td></td>
          <td>Total</td>
          <td>${total}</td>
        </tr>
      </tbody>
    </table>
  );
}

export { Cart, CartDetails };

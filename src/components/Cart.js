import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledButton from "./StyledButton";

const CartDetailsDiv = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 5;
  padding-bottom: 5px;
  background: ${(props) => props.theme.lightTextColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: ${(props) => props.theme.bottomShadow};

  * {
    margin: 5px 0 5px 0;
  }

  p {
    width: 100%;
    padding: 10px;
    text-align: right;
    color: ${(props) => props.theme.darkTextColor};
    font-size: 14px;
    border-bottom: 0.5px solid ${(props) => props.theme.lightSecondaryColor};

    span {
      font-weight: 700;
      color: ${(props) => props.theme.darkTextColor};
    }
  }
`;

const CartItemStyled = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  padding: 20px;
  border-bottom: 0.5px solid ${(props) => props.theme.lightSecondaryColor};

  img {
    height: 60px;
    width: 40px;
    position: absolute;
    left: 20px;
    top: 4px;
  }

  p {
    padding: 0;
    margin-left: 60px;
    text-align: left;
    color: ${(props) => props.theme.darkTextColor};
    font-size: 14px;
    border: none;

    span {
      font-weight: 700;
    }
  }

  a {
    font-size: 16px;
    margin-left: 60px;
    overflow-x: ellipsis;
    color: ${(props) => props.theme.darkTextColor};
  }

  a:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled(StyledButton)`
  font-weight: 700;

  i {
    margin-right: 5px;
  }

  &.active {
    background: ${(props) => props.theme.secondaryColor};
  }
`;

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
  const { cartItems, total } = props;
  return (
    <CartDetailsDiv>
      <p>
        Total: <span>${total}</span>
      </p>
      {cartItems.map((item) => {
        if (item.count > 0) {
          return (
            <CartItem
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
        <StyledButton>Check Out </StyledButton>
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

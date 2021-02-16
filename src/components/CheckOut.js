import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import ItemQuantityForm from "./ItemQuantityForm";
import styled from "styled-components";

const CheckOutDiv = styled.div`
  position: relative;
  padding-top: 65px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  max-width: 750px;
  height: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.lightTextColor};
  color: ${(props) => props.theme.darkTextColor};

  > p {
    text-transform: uppercase;
    font-size: 14px;
    color: ${(props) => props.theme.secondaryColor};
    font-weight: 700;

    span {
      color: ${(props) => props.theme.darkTextColor};
      font-size: 16px;
    }
  }
`;

const StyledCheckOutItem = styled.div`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  height: 200px;
  min-width: 350px;
  margin: 5px;
  padding: 20px 10px;
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.lightShadow};
  > * {
    margin: 0 10px;
  }

  div {
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    justify-content: space-between;
    font-size: 16px;
    > * {
      margin: 0;
      color: ${(props) => props.theme.darkTextColor};
    }

    * {
      /* align-items: flex-end; */
      justify-content: space-between;
    }

    p {
      margin: 0;
    }

    .title {
      font-size: 20px;

      :hover {
        text-decoration: underline;
      }
    }

    .price {
      font-weight: 700;
    }

    .subtotal {
      text-align: right;
      text-transform: uppercase;
      font-size: 14px;
      color: ${(props) => props.theme.secondaryColor};
      font-weight: 700;

      span {
        font-size: 16px;
        color: ${(props) => props.theme.darkTextColor};
      }
    }
  }

  img {
    height: 100%;
    width: auto;
    margin: auto;
  }
`;

function CheckOut(props) {
  const { cartItems, total, onAddToCart } = props;

  return (
    <CheckOutDiv>
      <h1>Cart</h1>
      {cartItems.map((item) => {
        if (item.count > 0) {
          return (
            <CheckOutItem
              key={uniqid()}
              imageFile={item.imageFile}
              name={item.name}
              price={item.price}
              count={item.count}
              onAddToCart={onAddToCart}
              tourData={item}
            />
          );
        } else {
          return null;
        }
      })}
      <p>
        Total: <span>${total}</span>
      </p>
    </CheckOutDiv>
  );
}

function CheckOutItem(props) {
  return (
    <StyledCheckOutItem>
      <img src={props.imageFile} alt="" />
      <div>
        <Link to={`tours/${props.fileName}`}>
          <p className="title">{props.name}</p>
        </Link>
        <p className="price">${props.price}</p>
        <ItemQuantityForm
          onAddToCart={props.onAddToCart}
          tourData={props.tourData}
        />
        <p className="subtotal">
          Subtotal: <span>${props.price * props.count}</span>
        </p>
      </div>
    </StyledCheckOutItem>
  );
}

export default CheckOut;

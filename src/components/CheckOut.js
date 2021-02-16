import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { useMediaQuery } from "react-responsive";
import ItemQuantityForm from "./ItemQuantityForm";
import { CheckOutDiv, StyledCheckOutItem } from "./CheckOutStyled";

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
  const isSmallScreen = useMediaQuery({ query: "(max-width: 400px)" });

  console.log(isSmallScreen);
  return (
    <StyledCheckOutItem isSmallScreen={isSmallScreen}>
      <img src={props.imageFile} alt=""></img>
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

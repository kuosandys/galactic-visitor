import React from "react";
import uniqid from "uniqid";
import ItemQuantityForm from "./ItemQuantityForm";

function CheckOut(props) {
  const { cartItems, total, onAddToCart } = props;

  return (
    <div>
      <h1>Cart</h1>
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
                  <td>
                    <ItemQuantityForm
                      onAddToCart={onAddToCart}
                      tourData={item}
                    />
                  </td>
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
    </div>
  );
}

export default CheckOut;

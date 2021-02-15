import StyledButton from "./StyledButton";
import React, { useState } from "react";

function ItemQuantityForm(props) {
  const { onAddToCart, tourData } = props;
  const [currentItem, setCurrentItem] = useState("");
  const [currentCount, setCurrentCount] = useState(0);

  const handleItemsChanged = (e) => {
    setCurrentCount(+e.target.value);
    setCurrentItem(e.target.name);
  };

  return (
    <form onSubmit={(e) => onAddToCart(e, currentItem, currentCount)}>
      <label>
        <i className="fas fa-user-astronaut"></i>
        <input
          type="number"
          name={tourData.fileName}
          defaultValue={tourData.count}
          max="10"
          min="1"
          onChange={handleItemsChanged}
        ></input>
      </label>
      <StyledButton type="submit">Update Cart</StyledButton>
      <p></p>
    </form>
  );
}

export default ItemQuantityForm;

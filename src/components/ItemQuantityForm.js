import React, { useState } from "react";
import { StyledForm, UpdateCartButton } from "./ItemQuantityFormStyled";

function ItemQuantityForm(props) {
  const { onAddToCart, tourData } = props;
  const [currentCount, setCurrentCount] = useState(props.tourData.count);

  const handleItemsChanged = (e) => {
    setCurrentCount(+e.target.value);
  };

  return (
    <StyledForm
      onSubmit={(e) => onAddToCart(e, props.tourData.fileName, currentCount)}
    >
      <label>
        <i className="fas fa-user-astronaut"></i>
      </label>
      <input
        type="number"
        name={tourData.fileName}
        defaultValue={tourData.count}
        max="10"
        min="1"
        onChange={handleItemsChanged}
      ></input>
      <UpdateCartButton type="submit">Update Cart</UpdateCartButton>
    </StyledForm>
  );
}

export default ItemQuantityForm;

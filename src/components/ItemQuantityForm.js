import StyledButton from "./StyledButton";
import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;

  * {
    margin: 0 3px;
  }

  input {
    border: none;
    border: 1.5px solid ${(props) => props.theme.mainColor};
    border-radius: 3px;
    font-size: 15px;
    color: ${(props) => props.theme.darkTextColor};
    font-weight: 700;
    padding-left: 3px;
    :focus,
    :active {
      outline: none;
    }
  }

  label {
    color: ${(props) => props.theme.lightTextColor};
    font-size: 20px;
  }
`;

const UpdateCartButton = styled(StyledButton)`
  margin-left: 20px;
`;

function ItemQuantityForm(props) {
  const { onAddToCart, tourData } = props;
  const [currentItem, setCurrentItem] = useState("");
  const [currentCount, setCurrentCount] = useState(0);

  const handleItemsChanged = (e) => {
    setCurrentCount(+e.target.value);
    setCurrentItem(e.target.name);
  };

  return (
    <StyledForm onSubmit={(e) => onAddToCart(e, currentItem, currentCount)}>
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
      <p></p>
    </StyledForm>
  );
}

export default ItemQuantityForm;

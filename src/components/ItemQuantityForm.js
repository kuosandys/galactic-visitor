import StyledButton from "./StyledButton";
import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;

  > * {
    margin: 0 4px;
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
    color: ${(props) => props.theme.darkTextColor};
    font-size: 20px;
  }
`;

const UpdateCartButton = styled(StyledButton)`
  margin-left: 20px;
`;

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

import styled from "styled-components";
import StyledButton from "../common/StyledButton";

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

export { StyledForm, UpdateCartButton };

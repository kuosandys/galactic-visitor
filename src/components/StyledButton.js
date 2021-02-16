import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 14px;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.lightTextColor};

  :hover {
    background: ${(props) => props.theme.secondaryColor};
    cursor: pointer;
  }

  :focus,
  :active {
    border: none;
    outline: none;
  }
`;

export default StyledButton;

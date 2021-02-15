import styled from "styled-components";

const StyledButton = styled.button`
  padding: 7px 10px;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  height: 30px;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.lightTextColor};

  i {
    font-size: 14px;
    margin-right: 7px;
  }

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

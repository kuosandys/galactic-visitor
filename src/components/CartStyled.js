import StyledButton from "../common/StyledButton";
import styled from "styled-components";

const CartDetailsDiv = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 5;
  padding-bottom: 5px;
  background: ${(props) => props.theme.lightTextColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: ${(props) => props.theme.bottomShadow};

  * {
    margin: 5px 0 5px 0;
  }

  p {
    width: 100%;
    padding: 10px;
    text-align: right;
    color: ${(props) => props.theme.darkTextColor};
    font-size: 14px;
    border-bottom: 0.5px solid ${(props) => props.theme.lightSecondaryColor};

    span {
      font-weight: 700;
      color: ${(props) => props.theme.darkTextColor};
    }
  }
`;

const CartItemStyled = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  padding: 20px;
  border-bottom: 0.5px solid ${(props) => props.theme.lightSecondaryColor};

  img {
    height: 60px;
    width: 40px;
    position: absolute;
    left: 20px;
    top: 4px;
  }

  p {
    padding: 0;
    margin-left: 60px;
    text-align: left;
    color: ${(props) => props.theme.darkTextColor};
    font-size: 14px;
    border: none;

    span {
      font-weight: 700;
    }
  }

  a {
    font-size: 16px;
    margin-left: 60px;
    overflow-x: ellipsis;
    color: ${(props) => props.theme.darkTextColor};
  }

  a:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled(StyledButton)`
  font-weight: 700;

  i {
    margin-right: 5px;
  }

  &.active {
    background: ${(props) => props.theme.secondaryColor};
  }
`;

export { CartDetailsDiv, CartIcon, CartItemStyled };

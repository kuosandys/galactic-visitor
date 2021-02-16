import styled from "styled-components";

const CheckOutDiv = styled.div`
  position: relative;
  padding-top: 65px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  max-width: 750px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.lightTextColor};
  color: ${(props) => props.theme.darkTextColor};

  h1 {
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: -0.4px;
  }

  > p {
    text-transform: uppercase;
    font-size: 14px;
    color: ${(props) => props.theme.secondaryColor};
    font-weight: 700;

    span {
      color: ${(props) => props.theme.darkTextColor};
      font-size: 16px;
    }
  }
`;

const StyledCheckOutItem = styled.div`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  height: 200px;
  min-width: 300px;
  margin: 5px auto;
  padding: 20px 10px;
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.lightShadow};
  > * {
    margin: 0 10px;
  }

  div {
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: column;
    align-items: stretch;
    text-align: ${(props) => (props.isSmallScreen ? "center" : "left")};
    justify-content: space-between;
    font-size: 16px;
    > * {
      margin: 0;
      color: ${(props) => props.theme.darkTextColor};
    }

    * {
      /* align-items: flex-end; */
      justify-content: space-between;
    }

    p {
      margin: 0;
    }

    .title {
      font-size: 20px;

      :hover {
        text-decoration: underline;
      }
    }

    .price {
      font-weight: 700;
    }

    .subtotal {
      text-align: ${(props) => (props.isSmallScreen ? "center" : "right")};
      text-transform: uppercase;
      font-size: 14px;
      color: ${(props) => props.theme.secondaryColor};
      font-weight: 700;

      span {
        font-size: 16px;
        color: ${(props) => props.theme.darkTextColor};
      }
    }
  }

  img {
    height: 100%;
    width: auto;
    margin: auto;
    display: ${(props) => (props.isSmallScreen ? "none" : "initial")};
  }
`;

export { CheckOutDiv, StyledCheckOutItem };

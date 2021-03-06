import styled from "styled-components";
import background from "../assets/images/background.jpg";
import StyledButton from "../common/StyledButton";
import { buttonPop, fadeIn } from "../common/animations";

const HomeDiv = styled.div`
  height: 100vh;
  padding-top: 100px;
  background: url(${background}) center top no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 0.5s;

  * {
    color: ${(props) => props.theme.lightTextColor};
    margin: 40px 0;
  }

  h1 {
    font-size: 45px;
    font-style: italic;
    font-weight: 400;
    text-shadow: ${(props) => props.theme.sharpShadow};
    text-align: center;
    opacity: 0;
    animation: ${fadeIn} 2s forwards;
    animation-delay: 1s;
    margin: 30px 10px;
  }
`;

const ToursLink = styled(StyledButton)`
  box-shadow: ${(props) => props.theme.aroundShadow};
  font-size: 20px;
  background-color: ${(props) => props.theme.mainColor};
  height: auto;
  padding: 15px 20px;

  :hover {
    animation: ${buttonPop} 0.3s forwards;
  }
`;

export { HomeDiv, ToursLink };

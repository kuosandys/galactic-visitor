import styled from "styled-components";
import { backgroundZoomFade, fadeIn } from "../common/animations";

const TourCardDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  overflow: hidden;

  &:hover {
    img {
      animation: ${backgroundZoomFade} 1s forwards;
    }

    p {
      animation: ${fadeIn} 1s forwards;
    }
  }

  * {
    z-index: 3;
  }

  p {
    opacity: 0;
    color: ${(props) => props.theme.lightTextColor};
    font-weight: 700;
    text-shadow: ${(props) => props.theme.aroundShadow},
      ${(props) => props.theme.sharpShadow};
  }

  img {
    position: absolute;
    top: -450px;
    z-index: 2;
    filter: grayscale(0.3);
  }

  .tourName {
    font-size: 24px;
    text-transform: uppercase;

    :hover {
      text-decoration: underline;
    }
  }

  .tourPrice {
    font-size: 18px;
  }
`;

function TourCard(props) {
  return (
    <TourCardDiv>
      <img key={props.imageSrc} src={props.imageSrc} alt=""></img>
      <p className="tourName">{props.tourName}</p>
      <p className="tourPrice">${props.price}</p>
    </TourCardDiv>
  );
}

export default TourCard;

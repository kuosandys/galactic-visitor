import styled, { keyframes } from "styled-components";

const backgroundMove = keyframes`
  from {
    transform: scale(1)
    opacity: 1;
  }
  to {
    transform: scale(1.1);
    opacity: 0.5;
  }
`;

const textShow = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

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
      animation: ${backgroundMove} 1s forwards;
    }

    p {
      animation: ${textShow} 1s forwards;
    }
  }

  * {
    z-index: 3;
  }

  p {
    opacity: 0;
  }
  img {
    position: absolute;
    top: -500px;
    z-index: 2;
  }
`;

function TourCard(props) {
  return (
    <TourCardDiv>
      <img key={props.imageSrc} src={props.imageSrc} alt=""></img>
      <p>{props.tourName}</p>
      <p>${props.price}</p>
    </TourCardDiv>
  );
}

export default TourCard;

import React from "react";
import { useMediaQuery } from "react-responsive";
import { TourCardDiv } from "./TourCardStyled";

function TourCard(props) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <TourCardDiv isSmallScreen={isSmallScreen}>
      <img key={props.imageSrc} src={props.imageSrc} alt=""></img>
      <p className="tourName">{props.tourName}</p>
      <p className="tourPrice">${props.price}</p>
    </TourCardDiv>
  );
}

export default TourCard;

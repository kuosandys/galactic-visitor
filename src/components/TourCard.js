import styled from "styled-components";

const TourCardDiv = styled.div`
  display: flex;
  img {
    height: 200px;
  }
`;

function TourCard(props) {
  return (
    <TourCardDiv>
      <img key={props.imageSrc} src={props.imageSrc} alt=""></img>
      <p>{props.tourName}</p>
    </TourCardDiv>
  );
}

export default TourCard;

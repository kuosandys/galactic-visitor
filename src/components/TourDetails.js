import { useParams } from "react-router-dom";
import styled from "styled-components";

const TourDetailsDiv = styled.div`
  img {
    height: 200px;
  }
`;

function TourDetails(props) {
  let { tourName } = useParams();
  let { toursData } = props;
  const tourData = toursData.filter((tour) => tour.name === tourName)[0];
  return (
    <TourDetailsDiv>
      <h1> {tourData.nameFormatted}</h1>
      <img src={tourData.imageFile} alt=""></img>
    </TourDetailsDiv>
  );
}

export default TourDetails;

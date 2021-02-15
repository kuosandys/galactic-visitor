import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemQuantityForm from "./ItemQuantityForm";

const TourDetailsDiv = styled.div`
  img {
    height: 200px;
  }
`;

function TourDetails(props) {
  let { tourName } = useParams();
  let { toursData, onAddToCart } = props;
  const tourData = toursData.filter((tour) => tour.fileName === tourName)[0];

  return (
    <TourDetailsDiv>
      <h1> {tourData.name}</h1>
      <img src={tourData.imageFile} alt=""></img>
      <p>First-Class Ticket Price: {tourData.price}</p>
      <p>Trip Distance: {tourData.distance}</p>
      <p>{tourData.description}</p>
      <ItemQuantityForm onAddToCart={onAddToCart} tourData={tourData} />
    </TourDetailsDiv>
  );
}

export default TourDetails;

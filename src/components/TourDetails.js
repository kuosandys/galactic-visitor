import React from "react";
import { useParams, Link } from "react-router-dom";
import ItemQuantityForm from "./ItemQuantityForm";
import { TourDetailsDiv } from "./TourDetailsStyled";

function TourDetails(props) {
  let { tourName } = useParams();
  let { toursData, onAddToCart } = props;
  const tourData = toursData.filter((tour) => tour.fileName === tourName)[0];

  return (
    <TourDetailsDiv>
      <Link to="/tours">Back</Link>
      <h1> {tourData.name}</h1>
      <img src={tourData.imageFile} alt=""></img>
      <p>
        Trip Distance: <span>{tourData.distance}</span>
      </p>
      <p>
        First-Class Ticket Price: <span>${tourData.price}</span>
      </p>
      <ItemQuantityForm onAddToCart={onAddToCart} tourData={tourData} />
      <p>
        <span className="quotes">"</span>
        {tourData.description}
        <span className="quotes">"</span>
      </p>
    </TourDetailsDiv>
  );
}

export default TourDetails;

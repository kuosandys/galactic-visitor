import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import ItemQuantityForm from "./ItemQuantityForm";

const TourDetailsDiv = styled.div`
  position: relative;
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  max-width: 750px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.lightTextColor};
  color: ${(props) => props.theme.darkTextColor};

  a {
    position: absolute;
    left: 0;
    top: 75px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.mainColor};
    :hover {
      text-decoration: underline;
    }
  }

  h1 {
    margin-top: 20px;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: -0.4px;
  }
  img {
    width: 200px;
    height: auto;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    span {
      font-weight: 700;
    }

    .quotes {
      color: ${(props) => props.theme.mainColor};
      letter-spacing: 2px;
      font-size: 24px;
      line-height: 16px;

      font-weight: 700;
      font-family: ${(props) => props.theme.secondaryFont};
    }
  }

  > * {
    margin: 0 40px 20px 40px;
  }
`;

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

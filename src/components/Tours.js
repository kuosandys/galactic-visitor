import React from "react";
import styled from "styled-components";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import TourCard from "./TourCard";
import uniqid from "uniqid";

const ToursStyled = styled.div`
  padding-top: 60px;
  width: 100vw;
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

function Tours(props) {
  let match = useRouteMatch();
  let { toursData } = props;
  return (
    <ToursStyled>
      <Switch>
        <Route exact path={`${match.path}`}>
          {toursData.map((tour) => {
            return (
              <Link key={uniqid()} to={`${match.url}/${tour.fileName}`}>
                <TourCard
                  imageSrc={tour.imageFile}
                  tourName={tour.name}
                  price={tour.price}
                />
              </Link>
            );
          })}
        </Route>
      </Switch>
    </ToursStyled>
  );
}

export default Tours;

import styled from "styled-components";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import TourCard from "./TourCard";
import uniqid from "uniqid";

function Tours(props) {
  let match = useRouteMatch();
  let { toursData } = props;
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`}>
          {toursData.map((tour) => {
            return (
              <Link to={`${match.url}/${tour.name}`}>
                <TourCard
                  key={uniqid()}
                  imageSrc={tour.imageFile}
                  tourName={tour.name}
                />
              </Link>
            );
          })}
        </Route>
      </Switch>
    </div>
  );
}

export default Tours;
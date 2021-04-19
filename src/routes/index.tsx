import React from "react";
import {Switch } from "react-router-dom";
import RouteWrapper from "./Route";
import {ApplicantPage,LandingPage} from "../pages";

const Routes:React.FC = ()=>{
  return (
    <Switch>
      <RouteWrapper path="/applicant" exact component={ApplicantPage}/>
      <RouteWrapper path="/" component={LandingPage} />
      <RouteWrapper component={LandingPage} />
    </Switch>
  );
}

export default Routes
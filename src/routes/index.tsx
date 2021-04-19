import React from "react";
import {Switch } from "react-router-dom";
import RouteWrapper from "./Route";
import {ApplicantPage,LandingPage} from "../pages";
import Result from "../pages/LandingPage/Result";

const Routes:React.FC = ()=>{
  return (
    <Switch>
      <RouteWrapper path="/applicant" exact component={ApplicantPage}/>
      <RouteWrapper path="/result" exact component={Result}/>
      <RouteWrapper path="/" component={LandingPage} />
      <RouteWrapper component={LandingPage} />
    </Switch>
  );
}

export default Routes
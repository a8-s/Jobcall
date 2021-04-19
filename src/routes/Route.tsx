import React from "react";
import { Route,RouteProps,RouteComponentProps,  } from "react-router-dom";

const RouteWrapper: React.FC<RouteProps> =
  ({ component: Component, ...rest }) => {
    if (!Component) {
      return null;
    }
    return (
        <Route
          {...rest}
          render={(props: RouteComponentProps<{}>) => <Component {...props} />}
        />
    );
  };

export default RouteWrapper;
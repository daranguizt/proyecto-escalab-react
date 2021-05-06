import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isLoggedIn,
  component: Component,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(p) =>
        !isLoggedIn || !restricted ? <Component {...p} /> : <Redirect to="/" />
      }
    />
  );
};

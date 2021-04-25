import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { MainScreen } from "../components/main/MainScreen";
import { LoginScreen } from "../components/auth/LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth/login"
          isLoggedIn={false}
          component={LoginScreen}
          restricted={true}
        />

        <PrivateRoute
          path="/"
          isLoggedIn={false}
          component={MainScreen}
          restricted={true}
        />
      </Switch>
    </Router>
  );
};

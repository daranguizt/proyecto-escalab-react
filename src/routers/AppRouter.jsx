import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { MainScreen } from "../components/main/MainScreen";
import { AuthRouter } from "./AuthRouter";
import {Header} from '../components/common/Header';

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute
          path="/auth"
          isLoggedIn={false}
          component={AuthRouter}
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

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebaseConfig";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { MainScreen } from "../components/main/MainScreen";
import { AuthRouter } from "./AuthRouter";
import { Header } from "../components/common/Header";
import { authLogin, startLogin } from "../actions/auth";
import { waiter } from "../helpers/loginWait";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(authLogin(user));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1>Please wait...</h1>;
  }

  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute
          path="/auth"
          isLoggedIn={isLoggedIn}
          component={AuthRouter}
          restricted={true}
        />

        <PublicRoute
          path="/"
          isLoggedIn={isLoggedIn}
          component={MainScreen}
          restricted={false}
        />
      </Switch>
    </Router>
  );
};

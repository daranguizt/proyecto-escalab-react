import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebaseConfig";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute"
import { AuthRoutes } from "./AuthRoutes";
import { Header } from "../components/common/Header";
import { authLogin } from "../actions/auth";
import { MainRoutes } from "./MainRoutes";
import { UserProfileScreen } from "../components/profile/UserProfileScreen";

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
          component={AuthRoutes}
          restricted={true}
        />
        
        <PrivateRoute isLoggedIn={isLoggedIn} exact path="/user-profile" component={UserProfileScreen}/>

        <PublicRoute
          path="/"
          isLoggedIn={isLoggedIn}
          component={MainRoutes}
          restricted={false}
        />
      </Switch>
    </Router>
  );
};

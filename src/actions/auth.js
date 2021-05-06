import { firebase } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const {user} = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      dispatch(authLogin(user));
      
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };
};

export const startRegister = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await user.updateProfile({ displayName: name });
      console.log(user);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(authLogout());
  }
}

export const authLogin = (user) => ({
  type: types.authLogin,
  payload: {
    uid: user.uid,
    displayName: user.displayName
  },
});

export const authLogout = () => ({
  type: types.authLogout,
});

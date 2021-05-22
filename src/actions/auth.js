import { firebase } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const startLogin = (email, password, setDisableButton = () => {}) => {
  return async (dispatch) => {
    try {
      const {user} = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
       

      dispatch(authLogin(user));
      return true;
      
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
      return false;
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
      dispatch(authLogin(user));
      return true;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
      return false;
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
    displayName: user.displayName,
    photoURL: user.photoURL
  },
});

export const authLogout = () => ({
  type: types.authLogout,
});

export const authUpdatePhotoURL = (photoURL) => ({
  type: types.authUpdatePhotoURL,
  payload: photoURL,
});

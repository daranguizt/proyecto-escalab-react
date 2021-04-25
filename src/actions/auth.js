import { firebase } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(user);
    }
}

export const startRegister = ({name, email, password}) => {
    return async (dispatch) => {
        const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await user.updateProfile({displayName: name});
        console.log(user);
    }
}

export const authLogin = (user) => ({
    type: types.authLogin,
    payload: user
});

export const authLogout = () => ({
    type: types.authLogout
});
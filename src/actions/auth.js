import { firebase } from "../firebase/firebaseConfig";

export const startLogin = (email, password) => {
    return (dispatch) => {
        const user = firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(user);
    }
}
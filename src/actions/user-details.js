import Swal from "sweetalert2";
import { types } from "../types/types";
import { db, firebase } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { authUpdatePhotoURL } from "./auth";

export const startSettingFavorite = (manga) => {
  return async (dispatch, getState) => {
    Swal.showLoading();
    const {
      user: { uid },
    } = getState().auth;
    const docRef = await db
      .collection(`${uid}/user-details/favorites`)
      .add(manga);
    dispatch(setFavorite({ ...manga, did: docRef.id }));
    Swal.fire({
      title: "Success",
      icon: "success",
      timer: 1000,
    });
  };
};

export const setFavorite = (manga) => ({
  type: types.userSetFavorite,
  payload: manga,
});

export const startDeletingFavorite = (manga) => {
  Swal.showLoading();
  return async (dispatch, getState) => {
    const {
      user: { uid },
    } = getState().auth;
    await db.doc(`${uid}/user-details/favorites/${manga.did}`).delete();
    dispatch(deleteFavorite(manga));
    Swal.fire({
      title: "Success",
      icon: "success",
      timer: 1000,
    });
  };
};

export const deleteFavorite = (manga) => ({
  type: types.userDeleteFavorite,
  payload: manga,
});

export const startLoadingFavorites = (uid) => {
  return async (dispatch) => {
    const dbFavorites = await db
      .collection(`${uid}/user-details/favorites`)
      .get();
    const favorites = dbFavorites.docs.map((doc) => ({
      did: doc.id,
      ...doc.data(),
    }));
    dispatch(loadFavorites(favorites));
  };
};

export const loadFavorites = (favorites) => ({
  type: types.userLoadFavorites,
  payload: favorites,
});

export const startUploadingAvatar = (file) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    const photoURL = await fileUpload(file);
    await firebase.auth().currentUser.updateProfile({
      photoURL,
    });
    dispatch(authUpdatePhotoURL(photoURL));
    Swal.close();
  };
};


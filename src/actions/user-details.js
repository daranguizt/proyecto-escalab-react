import { types } from "../types/types";

export const startSettingFavorite = () => {
    return (dispatch) => {

    }
};

export const setFavorite = (manga) => ({
    type: types.userSetFavorite,
    payload: manga
});

export const startDeletingFavorite = () => {
    return (dispatch) => {

    }
};



export const deleteFavorite = (manga) => ({
    type: types.userDeleteFavorite,
    payload: manga
});

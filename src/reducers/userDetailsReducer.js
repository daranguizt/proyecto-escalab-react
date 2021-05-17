import { types } from "../types/types";

const initialState = {
  favorites: [],
};

export const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userSetFavorite:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case types.userLoadFavorites:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

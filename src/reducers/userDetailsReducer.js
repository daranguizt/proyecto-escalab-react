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
    case types.userDeleteFavorite:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

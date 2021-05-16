import { types } from "../types/types";

const initialState = {
  newManga: [],
  hotManga: [],
  search: [],
};

export const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.mangaLoadHot:
      break;
    case types.mangaLoadNew:
      return { ...state, newManga: action.payload };
    case types.mangaLoadFavorites:
      break;
    case types.mangaSearch:
      break;
    default:
      return state;
  }
};

import { types } from "../types/types";

const initialState = {
  newManga: [],
  hotManga: [],
  search: [],
  current: {},
};

export const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.mangaLoadHot:
      return { ...state, hotManga: action.payload };
    case types.mangaLoadNew:
      return { ...state, newManga: action.payload };
    case types.mangaSearch:
      return { ...state, search: action.payload };
    case types.mangaSetCurrent:
      return { ...state, current: { ...action.payload } };
    case types.mangaCleanCurrent:
      return {...state, current: {}};
    default:
      return state;
  }
};

import { types } from "../types/types";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        user: { ...action.payload },
      };
    case types.authLogout:
      return {
        ...state,
        user: null,
      };
    case types.authUpdatePhotoURL:
      return {
        ...state,
        user: {
          ...state.user,
          photoURL: action.payload,
        },
      };
    default:
      return state;
  }
};

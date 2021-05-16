import { types } from "../types/types";
import {
  BASE_URL,
  getNewMangaVariables,
  getNewMangaQuery,
} from "../helpers/endpoints";

export const startFetchingNewManga = (page = 1, perPage = 20) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: getNewMangaQuery,
        variables: getNewMangaVariables(page, perPage),
      }),
    };

    const response = await fetch(BASE_URL, options);
    const jsonResponse = await response.json();
    const {Page:{media}} = jsonResponse.data;
    dispatch(loadNewManga(media));
  };
};

export const loadNewManga = (newMangas) => ({
  type: types.mangaLoadNew,
  payload: newMangas,
});

export const startFetchingHotManga = () => {
  return (dispatch) => {};
};

export const loadHotManga = (hotMangas) => ({
  type: types.mangaLoadHot,
  payload: hotMangas,
});

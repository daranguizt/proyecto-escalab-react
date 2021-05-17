import { types } from "../types/types";
import {
  BASE_URL,
  getNewMangaOptions,
  getHotMangaOptions,
  getCurrentMangaOptions
} from "../helpers/endpoints";

export const startFetchingNewManga = (page = 1, perPage = 20) => {
  return async (dispatch) => {
    const response = await fetch(BASE_URL, getNewMangaOptions(page, perPage));
    const jsonResponse = await response.json();
    const {Page:{media}} = jsonResponse.data;
    dispatch(loadNewManga(media));
  };
};

export const loadNewManga = (newMangas) => ({
  type: types.mangaLoadNew,
  payload: newMangas,
});

export const startFetchingHotManga = (page = 1, perPage = 20) => {
  return async (dispatch) => {
    const response = await fetch(BASE_URL, getHotMangaOptions(page, perPage));
    const jsonResponse = await response.json();
    const {Page:{media}} = jsonResponse.data;
    dispatch(loadHotManga(media));
  };
};

export const loadHotManga = (hotMangas) => ({
  type: types.mangaLoadHot,
  payload: hotMangas,
});

export const setCurrentManga = (manga) => ({
  type: types.mangaSetCurrent,
  payload: manga,
});

export const cleanCurrentManga = () => ({
  type: types.mangaCleanCurrent   
})

export const startLoadingCurrentManga = (id) => {
  return (dispatch) => {
    fetch(BASE_URL, getCurrentMangaOptions(id))
    .then((res) => res.json())
    .then(({data: {Media}}) => dispatch(setCurrentManga(Media)));
  };
};

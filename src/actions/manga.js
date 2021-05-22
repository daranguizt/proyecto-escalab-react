import { types } from "../types/types";
import {
  BASE_URL,
  getNewMangaOptions,
  getHotMangaOptions,
  getCurrentMangaOptions,
  getCategoriesOptions,
  getMangasBySearchOptions,
  getMangasByCategoryOptions,
} from "../helpers/anilistAPI";

export const startFetchingNewManga = (page = 1, perPage = 20) => {
  return async (dispatch) => {
    const response = await fetch(BASE_URL, getNewMangaOptions(page, perPage));
    const jsonResponse = await response.json();
    const {
      Page: { media },
    } = jsonResponse.data;
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
    const {
      Page: { media },
    } = jsonResponse.data;
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
  type: types.mangaCleanCurrent,
});

export const startLoadingCurrentManga = (id) => {
  return (dispatch) => {
    fetch(BASE_URL, getCurrentMangaOptions(id))
      .then((res) => res.json())
      .then(({ data: { Media } }) => dispatch(setCurrentManga(Media)));
  };
};

export const startLoadingCategories = () => {
  return async (dispatch) => {
    fetch(BASE_URL, getCategoriesOptions())
      .then((res) => res.json())
      .then(({ data: { GenreCollection } }) =>
        dispatch(loadCategories(GenreCollection))
      );
  };
};

export const loadCategories = (categories) => ({
  type: types.mangaLoadCategories,
  payload: categories,
});

export const startSearchingManga = (search = {}) => {
  return (dispatch) => {
    if (search.query) {
      fetch(BASE_URL, getMangasBySearchOptions(1, 20, search.query))
        .then((res) => res.json())
        .then(
          ({
            data: {
              Page: { media },
            },
          }) => dispatch(setSearchedManga(media))
        );
    } else {
      if (search.category) {
        fetch(BASE_URL, getMangasByCategoryOptions(1, 20, search.category))
          .then((res) => res.json())
          .then(
            ({
              data: {
                Page: { media },
              },
            }) => dispatch(setSearchedManga(media))
          );
      }
    }
  };
};

export const setSearchedManga = (mangas) => ({
  type: types.mangaSearch,
  payload: mangas,
});

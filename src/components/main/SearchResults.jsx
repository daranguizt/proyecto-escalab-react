import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import queryString from 'query-string';
import { MangaCard } from "./MangaCard";
import { Sidebar } from "./Sidebar";
import { setSearchedManga, startLoadingCategories, startSearchingManga } from "../../actions/manga";

export const SearchResults = () => {
  const { search } = useSelector((state) => state.manga);
  const dispatch = useDispatch();
  const location = useLocation();
  const { category = "", q ="" } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(startSearchingManga({category, query: q}));
    dispatch(startLoadingCategories());
    return () => {
        dispatch(setSearchedManga([]));
    }
  }, [category, q, dispatch]);
  return (
    <div className="main__screen">
      <Sidebar />

      <div className="main__recomendations">
        <h1>Results</h1>
        <hr />
        <div className="main__results animate__animated animate__fadeIn">
          {search.map((item) => (
            <MangaCard
              coverImage={item.coverImage.medium}
              title={item.title.romaji}
              id={item.id}
              listToSearch={search}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

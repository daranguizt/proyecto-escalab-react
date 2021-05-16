import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFetchingNewManga } from "../../actions/manga";
import { MangaCard } from "./MangaCard";

export const WhatsNew = () => {
  const dispatch = useDispatch();
  const {newManga} = useSelector(state => state.manga)
  useEffect(() => {
    dispatch(startFetchingNewManga());
  }, [dispatch]);
  return <div className="main__new">
      {newManga.map((manga) => <MangaCard key={manga.id} id={manga.id} title={manga.title.romaji} coverImage={manga.coverImage.medium}/>)}
  </div>;
};

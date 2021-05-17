import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFetchingHotManga, startFetchingNewManga } from "../../actions/manga";
import { MangaSlider } from "./MangaSlider";
import { Sidebar } from "./Sidebar";

export const MainScreen = () => {
  const dispatch = useDispatch();
  const {newManga, hotManga} = useSelector(state => state.manga);
  useEffect(() => {
    dispatch(startFetchingNewManga());
    dispatch(startFetchingHotManga());
  }, [dispatch]);
  return (
    <div className="main__screen">
      <Sidebar />

      <div className="main__recomendations">
        <h3>What's New</h3>
        <hr />
        <MangaSlider mangas={newManga} sectionName="newManga"/>
        <h3>Hot</h3>
        <hr />
        <MangaSlider mangas={hotManga} sectionName="hotManga"/>
      </div>
    </div>
  );
};

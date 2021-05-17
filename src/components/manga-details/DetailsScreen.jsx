import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  cleanCurrentManga,
  startLoadingCurrentManga,
} from "../../actions/manga";
import { DetailsInfo } from "./DetailsInfo";

export const DetailsScreen = () => {
  const { id } = useParams();
  const { current } = useSelector((state) => state.manga);
  const currentRef = useRef(current.id);
  if (currentRef.current !== id) {
    currentRef.current = current.id;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentRef.current) {
      dispatch(startLoadingCurrentManga(id));
    }
    return () => {
      dispatch(cleanCurrentManga());
    };
  }, [dispatch, currentRef, id]);
  return (
    <div className="manga-details__screen">
      {current.id && <DetailsInfo {...current}/>}
    </div>
  );
};

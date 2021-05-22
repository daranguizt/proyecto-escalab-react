import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentManga } from "../../actions/manga";

export const MangaCard = ({
  id,
  title,
  coverImage,
  listToSearch,
}) => {
  const dispatch = useDispatch();
  const handleSetCurrentManga = () => {
    const currentManga = listToSearch.find(
      (item) => item.id === id
    );
    dispatch(setCurrentManga(currentManga));
  };

  return (
    <Link
      onClick={handleSetCurrentManga}
      to={`manga-details/${id}`}
      className="main__manga-card"
    >
      <div className="main__manga-card-image">
        <img src={coverImage} alt={title} />
      </div>
      <div className="main__manga-card-footer">
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

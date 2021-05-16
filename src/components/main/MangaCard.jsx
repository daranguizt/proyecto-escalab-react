import React from "react";
import { Link } from "react-router-dom";

export const MangaCard = ({ id, title, coverImage }) => {
  return (
    <Link to={`manga-details/${id}`} className="main__manga-card">
      <div className="main__manga-card-image">
          <img src={coverImage} alt={title} />
      </div>
      <div className="main__manga-card-footer">
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

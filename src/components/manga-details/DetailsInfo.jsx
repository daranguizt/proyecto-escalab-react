import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { isFavorite } from "../../helpers/functions";
import {
  setFavorite,
  deleteFavorite
} from "../../actions/user-details";

export const DetailsInfo = ({ title, coverImage, ...otherProps }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.userDetails);
  const {user} = useSelector(state => state.auth);
  const {
    id,
    status,
    description,
    startDate,
    endDate,
    chapters,
    volumes,
    genres,
    popularity,
  } = otherProps;

  const isFav = isFavorite({ id }, favorites);
  const htmlDecode = (input) => {
    var e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  };

  const handleFavorite = () => {
    !isFav
      ? dispatch(setFavorite({ title, coverImage, ...otherProps }))
      : dispatch(deleteFavorite({ title, coverImage, ...otherProps }));
  };

  return (
    <div className="manga-details__details-info animate__animated animate__fadeIn">
      <img src={coverImage.large} alt={title.romaji} />
      <div className="manga-details__details-info-text">
        <div className="manga-details__details-info-title">
          <h2>{title.romaji} </h2>
          {user?.uid && <div
            onClick={handleFavorite}
            className="manga-details__details-info-favorite"
          >
            <FontAwesomeIcon icon={isFav ? fasStar : farStar} />
            &nbsp;
            <span className="dark-grey-text ">Mark as favorite!</span>
          </div>}
        </div>

        <hr />
        <h3>
          <span className="light-grey-text">
            alt: {title.english} ; {title.native}
          </span>
        </h3>
        <br />
        <p dangerouslySetInnerHTML={{ __html: htmlDecode(description) }} />
        <br />
        <p>Status: {status}</p>
        <p>Genres: {genres.join(", ")}</p>
        <p>
          Start Date: {startDate.day}/{startDate.month}/{startDate.year}
        </p>
        {endDate.day && (
          <p>
            End Date: {endDate.day}/{endDate.month}/{endDate.year}
          </p>
        )}
        <p>Numbers of favs: {popularity}</p>
        {chapters && <p>Chapters: {chapters}</p>}
        {volumes && <p>Volumes: {volumes}</p>}
      </div>
    </div>
  );
};

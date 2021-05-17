import React from "react";

export const DetailsInfo = ({ title, coverImage, ...otherProps }) => {
  const {
    status,
    description,
    startDate,
    endDate,
    chapters,
    volumes,
    genres,
    popularity,
  } = otherProps;

  const htmlDecode = (input) => {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  return (
    <div className="manga-details__details-info animate__animated animate__fadeIn">
      <img src={coverImage.large} alt={title.romaji} />
      <div className="manga-details__details-info-text">
        <h2>{title.romaji}</h2>
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
        <p>Start Date: {startDate.day}/{startDate.month}/{startDate.year}</p>
        {endDate.day && <p>End Date: {endDate.day}/{endDate.month}/{endDate.year}</p>}
        <p>Numbers of favs: {popularity}</p>
        {chapters &&  <p>Chapters: {chapters}</p>}
        {volumes &&  <p>Volumes: {volumes}</p>}
      </div>
    </div>
  );
};

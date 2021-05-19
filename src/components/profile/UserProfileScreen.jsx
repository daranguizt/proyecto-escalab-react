import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/img/avatar.svg";
import { MangaCard } from "../main/MangaCard";

export const UserProfileScreen = () => {
  const {
    auth: { user },
    userDetails: { favorites },
  } = useSelector((state) => state);
  return (
    <div className="user-profile__container">
      <div className="user-profile__user-info">
        <img
          src={logo}
          alt="user-avatar"
          className="user-profile__user-avatar"
        />
        <div className="user-profile__user-data">
          <h2>{user.displayName}</h2>
          <hr />
        </div>
      </div>

      <div className="user-profile__favorites-container">
        <h2 className="">Your Favs</h2>
        <hr />
        <div className="user-profile__favorites">
          {favorites.map((favorite) => (
            <MangaCard
              key={favorite.id}
              id={favorite.id}
              coverImage={favorite.coverImage.medium}
              title={favorite.title.romaji}
              sectionName="newManga"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUploadingAvatar } from "../../actions/user-details";
import logo from "../../assets/img/avatar.svg";
import { MangaCard } from "../main/MangaCard";

export const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const {
    auth: { user },
    userDetails: { favorites },
  } = useSelector((state) => state);

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadingAvatar(file));
    }
  };

  return (
    <div className="user-profile__container">
      <div className="user-profile__user-info">
        <img
          onClick={handlePictureClick}
          src={user?.photoURL || logo}
          alt="user-avatar"
          className="user-profile__user-avatar"
        />
        <div className="user-profile__user-data">
          <h2>{user?.displayName}</h2>
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
              listToSearch={favorites}
            />
          ))}
        </div>
      </div>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

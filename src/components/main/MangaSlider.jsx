import React from "react";
import { MangaCard } from "./MangaCard";

export const MangaSlider = ({ mangas, sectionName }) => {
  return (
    <div className="main__new">
      {mangas.map((manga) => (
        <MangaCard
          key={manga.id}
          id={manga.id}
          title={manga.title.romaji}
          coverImage={manga.coverImage.medium}
          sectionName={sectionName}
        />
      ))}
    </div>
  );
};

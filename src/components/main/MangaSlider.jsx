import React from "react";
import Carousel from "react-elastic-carousel";
import { MangaCard } from "./MangaCard";

export const MangaSlider = ({ mangas, sectionName }) => {
  return (
    <Carousel className="main__carrousel" itemsToShow={3}>
      {mangas.map((manga) => (
        <MangaCard
          key={manga.id}
          id={manga.id}
          title={manga.title.romaji}
          coverImage={manga.coverImage.medium}
          sectionName={sectionName}
        />
      ))}
    </Carousel>
  );
};

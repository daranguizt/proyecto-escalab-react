import React from "react";

export const MainScreen = () => {
  return (
    <div className="main__screen">
      <ul className="main__categories">
        <li>Action</li>
        <li>Romance</li>
        <li>Harem</li>
        <li>Isekai</li>
        <li>Comedy</li>
      </ul>
      <div className="main__recomendations">
        <h3>What's New</h3>
        <hr />
        <div className="main__new"></div>

        <h3>Hot</h3>
        <hr />
        <div className="main__hot"></div>
      </div>
    </div>
  );
};

import React from 'react';
import gif from '../../assets/img/404.gif';

export const NotFoundScreen = () => {
    return (
        <div className="not_found">
            <img src={gif} alt="kanna gif" />
            <h3>It seems the page does not exist</h3>
            <h2>Click the logo to go to the main page</h2>
        </div>
    )
}

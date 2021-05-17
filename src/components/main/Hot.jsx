import React from 'react'
import { useSelector } from 'react-redux';

export const Hot = () => {
    const {hotManga} = useSelector(state => state.manga);
    return (
        <div className="main__hot">

        </div>
    )
}

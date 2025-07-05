import React from 'react';
import { IMAGE_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    return (
        <div className="min-w-[192px] w-48 pr-4">
            <img src={IMAGE_URL + posterPath} alt="Movie poster" />
        </div>
    );
};

export default MovieCard;
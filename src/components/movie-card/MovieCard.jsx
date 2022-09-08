import React from 'react';

import './MovieCard.scss';
import {category} from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import {Link} from "react-router-dom";

const MovieCard = props => {

    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className='movie-card relative-p'>
                <img src={apiConfig.w500Image(item.poster_path)} alt="movie-img"/>
                <span className='movie-card__title'>{item.title || item.name}</span>
                <div className='movie-card__overlay overlay'>
                    <div className='overlay__titles'>
                        <div className='overlay__rating row'>
                            <span>{item.vote_average}</span>
                            <i className="fas fa-star" />
                        </div>
                        <time className="overlay__date" dateTime={item.release_date || item.first_air_date}>
                            {item.release_date || item.first_air_date}
                        </time>
                        <span className='overlay__date'>USA</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
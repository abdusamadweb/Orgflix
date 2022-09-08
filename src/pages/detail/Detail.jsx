import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import './Detail.scss';
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from "../../components/movie-list/MovieList";

const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}})
            setItem(response);
            window.scrollTo(0, 0)
        }
        getDetail();
    }, [category, id]);

    return (
        <div className='detail'>
            {
                item && (
                    <div className='detail__inner'>
                        <div className='detail__banner' style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="container">
                            <div className="detail__content content row mb-3">
                                <div className="content__poster" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                                <div className="content__info">
                                    <h2 className='content__title'>{ item.title || item.name }</h2>
                                    <ul className="content__genres row">
                                        {
                                            item.genres && item.genres.slice(0, 5).map((genre, index) => (
                                                <li className='content__genre' key={index}>{ genre.name }</li>
                                            ))
                                        }
                                    </ul>
                                    <p className='content__desc'>{ item.overview }</p>
                                    <div className="content__cast cast">
                                        <div className="casr__header">
                                            <h3 className='cast__title'>Casts</h3>
                                        </div>
                                        <CastList id={item.id} />
                                    </div>
                                </div>
                            </div>
                            <div className="section mb-3">
                                <VideoList id={id} />
                            </div>
                            <div className="section mb-3">
                                <div className="section__header">
                                    <h3>Similar</h3>
                                </div>
                                <MovieList category={category} type={'similar'} id={item.id} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Detail;











import React from 'react';
import HeroSlide from "../components/hero-slide/HeroSlide";
import {Link} from "react-router-dom";
import {OutlineButton} from "../components/UI/button/MyButton";
import MovieList from "../components/movie-list/MovieList";
import {category, movieType, tvType} from "../api/tmdbApi";

const Catalog = () => {
    return (
        <div>
            <HeroSlide />
            <div className="container">
                <div className="section">
                    <div className="section__header row between align-center mb-2">
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className={'small'}>
                                View More
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>


                <div className="section">
                    <div className="section__header row between align-center mb-2">
                        <h2>Top Rated</h2>
                        <Link to='/movie'>
                            <OutlineButton className={'small'}>
                                View More
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>


                <div className="section">
                    <div className="section__header row between align-center mb-2">
                        <h2>Trending TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className={'small'}>
                                View More
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>


                <div className="section">
                    <div className="section__header row between align-center mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className={'small'}>
                                View More
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={movieType.top_rated}/>
                </div>
            </div>
        </div>
    );
};

export default Catalog;



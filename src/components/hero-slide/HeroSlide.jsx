import React, {useEffect, useRef, useState} from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from "../../api/apiConfig";

import './HeroSlide.scss';
import { useHistory } from 'react-router';
import MyButton, {OutlineButton} from "../UI/button/MyButton";
import MyModal, {ModalContent} from "../UI/modal/MyModal";

const HeroSlide = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(1, 6));
                console.log(response)
            } catch {
                console.log('error')
            }
        }
        getMovies();
    }, []);

    return (
        <div className='hero-slide'>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay: 4000}}
            >
                {
                    movieItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <HeroSlideItem
                                    item={item}
                                    className={`${isActive ? 'active' : ''}`}
                                />
                            )}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            {
                movieItems.map((item, index) => <TrailerModal key={index} item={item} />)
            }
        </div>
    );
};

const HeroSlideItem = ({ item, className }) => {

    let history = useHistory();

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);

        const videos = await tmdbApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer'
        }

        modal.classList.toggle('active');
    }

    return (
        <div
            className={`hero-slide__item ${className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content content row align-center">
                <div className="content__info">
                    <h2 className="content__title">{item.title}</h2>
                    <p className="content__desc">{item.overview}</p>
                    <div className="content__btns">
                        <MyButton onClick={() => history.push('/movie/' + item.id)}>
                            Watch now
                        </MyButton>
                        <OutlineButton onClick={setModalActive}>
                            Watch Trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="content__poster row align-center">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="film-img"/>
                </div>
            </div>
        </div>
    )
}

const TrailerModal = ({ item }) => {
    const [active, setActive] = useState(false);

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAtribute('src', '');

    return (
        <MyModal active={active} setActive={setActive} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose} >
                <iframe ref={iframeRef} width='100%' height='400px' title='trailer'></iframe>
            </ModalContent>
        </MyModal>
    )
}


export default HeroSlide;














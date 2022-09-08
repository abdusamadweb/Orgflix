import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";

const VideoList = ({ id }) => {

    const {category} = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, id])

    return (
        <div className='videos'>
            <ul className="videos__list">
                {
                    videos.map((item, index) => (
                        <Video key={index} item={item} />
                    ))
                }
            </ul>
        </div>
    );
};

const Video = ({ item }) => {

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, [])

    return (
        <div className='video'>
            <div className="video__title">
                <h3>{ item.name }</h3>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width='100%'
                title='video'
            />
        </div>
    )
}

export default VideoList;
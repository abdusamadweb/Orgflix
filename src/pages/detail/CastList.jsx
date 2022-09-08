import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const CastList = ({ id }) => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, id])

    return (
        <div className='casts'>
            <ul className='casts__list'>
                {
                    casts.map((item, index) => (
                        <li className='casts__item item' key={index}>
                            <div className='item__img' style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                            <span className='item__desc'>{ item.name }</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CastList;

















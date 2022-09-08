import React, {useEffect, useRef} from 'react';

import './header.scss';
import {Link, useLocation} from "react-router-dom";

const headerNav = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Movies',
        path: '/movie'
    },
    {
        title: 'TV Series',
        path: '/tv'
    }
]

const Header = () => {

    const {pathname} = useLocation();
    const headerRef = useRef(null);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }
    }, [])

    const active = headerNav.findIndex(e => e.path === pathname);

    return (
        <div className='header' ref={headerRef}>
            <div className="container">
                <div className="header__inner row between align-center">
                    <Link className='header__logo logo' to='/'>ORGFLIX</Link>
                    <ul className="header__nav row">
                        {
                            headerNav.map((item, index) => (
                                <li className={`header__item ${index === active ? 'active' : ''}`} key={index}>
                                    <Link to={item.path}> {item.title} </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
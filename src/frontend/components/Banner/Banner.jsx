import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


export const Banner = () => {
    return (
        <div className='banner'>
            <Link to='/products'>
                <div
                className='banner__image'
                >
                    Banner Image Incoming
                </div>
            </Link>
        </div>
    )
}
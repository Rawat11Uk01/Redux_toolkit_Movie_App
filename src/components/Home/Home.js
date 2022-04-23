import movieApi from '../../common/apis/movieApi'
import { APIKEY } from '../../common/apis/MovieApiKey';
import React, { useEffect, useState } from 'react';
import MovieListing from '../Movielisting/MovieListing'
import { useDispatch, useSelector } from 'react-redux';

import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
const Home = () => {
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch])

    return (
        <div>
            <div className='banner-img'>

            </div>
            <MovieListing />
        </div>
    );
};

export default Home;
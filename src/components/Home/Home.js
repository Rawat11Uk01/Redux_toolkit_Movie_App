import movieApi from '../../common/apis/movieApi'
import { APIKEY } from '../../common/apis/MovieApiKey';
import React, { useEffect, useState } from 'react';
import MovieListing from '../Movielisting/MovieListing'
import { useDispatch } from 'react-redux';
import { movieActions } from '../../features/movies/movieSlice';import { useSelector } from 'react-redux';
const Home = () => {
    const dispatch = useDispatch();
const m = useSelector(state=>state.movies)
    const movieText = 'Harry';
    useEffect(() => {
        const fetchmovies = async () => {
            const movieText = 'Harry';
            const response = await movieApi.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`).catch((error) => console.log(error))
            // console.log(response.data.Search);
            dispatch(movieActions.addMovies(response.data))
        }
       
        fetchmovies();
    }, [])
 console.log(m);
    return (
        <div>
            <div className='banner-img'>

            </div>
            <MovieListing />
        </div>
    );
};

export default Home;
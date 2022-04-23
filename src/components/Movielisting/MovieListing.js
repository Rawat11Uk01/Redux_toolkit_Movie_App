import React from 'react';
import './MovieListing.scss'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard'
const MovieListing = () => {
    const movies = useSelector(state => state.movie.movies);
    let renderMovies = '';
    
    renderMovies = movies.Response === 'True' ? (movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)) : (<div className='movies-err'>
        <h3>{movies.Error
        }</h3>
    </div >);
    console.log(movies);

    let renderShows = '';

    const shows = useSelector(state => state.movie.shows);
    console.log('hi', shows)
    // renderShows = shows.Response === 'True' ? (shows.Search)
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {renderMovies}
                </div>
            </div>
            <div className='show-list'>
                <h2>shows</h2>
                <div className='show-container'>
                    {renderShows}
                </div>
            </div>

        </div>
    );
};

export default MovieListing;
import React, { useState } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncShows } from '../../features/movies/movieSlice';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
const Header = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState('');
    const inputChangeHandler = (e) => {
        setTerm(e.target.value);
    }

    const submithandler = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncShows(term));
        dispatch(fetchAsyncMovies(term));
        console.log(term)
    }
    return (
        <div className='header'>

            <div className='logo'>
                <Link to='/'>      Movie App    </Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submithandler} >
                    <input type='text' value={term} placeholder='enter movie or show' onChange={inputChangeHandler} />
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
            </div>

            <div className='user-image'>
                <img src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png' alt='user' />
            </div>
        </div>
    );
};

export default Header;
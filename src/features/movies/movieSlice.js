import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movies: []
}
const movieSlice =createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
          addMovies(state,action){
            state.movies = action.payload;
          }
    }
})

export const movieActions = movieSlice.actions;
export const getAllMovies = (state)=> state.movie.movies;
export default movieSlice;

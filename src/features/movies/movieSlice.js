import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";
const movieText = 'Harry';



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieText = 'Harry';

  const response = await movieApi.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`).catch((error) => console.log(error))
  // console.log(response.data.Search);
  return response.data;


});

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async () => {
  const showText = 'Friends';

  const response = await movieApi.get(`?apikey=${APIKEY}&s=${showText}&type=series`).catch((error) => console.log(error))
  // console.log(response.data.Search);
  return response.data;


});

const initialState = {
  movies: {},
  shows: {},
}
const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    // addshows(state, action) {
    //   state.shows = action.payload;
    // }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => { console.log('pending') },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully')
      return { ...state, movies: payload }
    },

    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log(' Rejected!')
      return { ...state, movies: payload }
    },

    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully')
      return { ...state, shows: payload }
    },
  }
})

export const movieActions = movieSlice.actions;
export const getAllMovies = (state) => state.movie.movies;
export default movieSlice.reducer;

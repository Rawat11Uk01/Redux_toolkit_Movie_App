import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";
const movieText = 'Harry';



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {


  const response = await movieApi.get(`?apikey=${APIKEY}&s=${term}&type=movie`).catch((error) => console.log(error))
  // console.log(response.data.Search);
  return response.data;


});

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) => {
 

  const response = await movieApi.get(`?apikey=${APIKEY}&s=${term}&type=series`).catch((error) => console.log(error))
  // console.log(response.data.Search);
  return response.data;


});

export const fetchAsyncDetail = createAsyncThunk('detail/fetchAsyncDetail', async (id) => {
  const response = await movieApi.get(`?apikey=${APIKEY}&i=${id}&Plot=full`).catch((error) => console.log(error))
  // console.log(response.data.Search);
  return response.data;
});

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {}
}
const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    // addMovies(state, action) {
    //   state.movies = action.payload;
    // },
    removeSelectedMovieOrShow(state, action) {
      state.selectMovieOrShow = {};
    }
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
    [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully')
      return { ...state, selectMovieOrShow: payload }
    },
  }
})

export const movieActions = movieSlice.actions;
export const getAllMovies = (state) => state.movie.movies;
export default movieSlice.reducer;

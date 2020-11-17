import { 
  SEARCH_MOVIES_REQUEST, 
  SEARCH_MOVIES_SUCCESS, 
  SEARCH_MOVIES_FAILURE
} from '../action-types/action-types'
import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3'
const API_KEY = ''  // Put your API KEY here as a string!

export const getMovies = () => {
  return (dispatch) => {
    dispatch(getMovieRequest())
    axios
      .get(`${baseURL}/trending/movie/day`, {
        params: {
          api_key : API_KEY,
        }
      })
      .then((res) => {
        const movies = res.data.results
        dispatch(getMovieSuccess(movies))
      })
      .catch((err) => {
        dispatch(getMovieFailure(err.message))
      })
  }
}

export const searchMovie = (text) => {
  return (dispatch) => {
    dispatch(getMovieRequest())
    axios
      .get(`${baseURL}/search/movie`, {
        params: {
          api_key : API_KEY,
          language: 'en_US',
          query: `${text}`,
          page: 1
        }
      })
      .then((res) => {
        const movies = res.data.results
        dispatch(getMovieSuccess(movies))
      })
      .catch((err) => {
        dispatch(getMovieFailure(err.message))
      })
  }
}

const getMovieRequest = () => ({
  type: SEARCH_MOVIES_REQUEST,
})

const getMovieSuccess = (movies) => ({
  type: SEARCH_MOVIES_SUCCESS,
  movies
})

const getMovieFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  error
})
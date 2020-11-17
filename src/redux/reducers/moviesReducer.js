import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE } from '../action-types/action-types'

const initialState = {
  loading: false,
  movies: [],
  error: null,
};

export const moviesReducer = (state = initialState, { type, movies, error }) => {
  switch (type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: movies
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        loading: false,
        error: error
      };
    default:
      return state;
  }
};

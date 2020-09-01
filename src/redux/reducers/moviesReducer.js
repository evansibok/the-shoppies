import * as types from '../types'

const moviesState = {
  results: {},
  moviesList: [],
  nomMovies: [],
  isLoading: false,
  nomState: false,
  searchValue: "",
  errorMessage: "",
}

export function moviesReducer(state = moviesState, action) {
  switch (action.type) {
    case types.GET_ALL_MOVIES_START:
    case types.SET_NOMINATED_MOVIE_START:
    case types.REMOVE_NOMINATED_MOVIE_START:
      return {
        ...state,
        isLoading: true,
        nomState: true,
      }
    case types.GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results: action.payload,
        moviesList: action.payload.Search,
      }
    case types.GET_ALL_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      }
    case types.SET_FILTER_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      }
    case types.SET_NOMINATED_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        nomState: false,
        nomMovies: [...state.nomMovies, action.payload]
      }
    case types.REMOVE_NOMINATED_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        nomState: false,
        nomMovies: state.nomMovies.filter(movie => movie.imdbID !== action.payload)
      }
    case types.SET_NOMINATED_MOVIE_FAILURE:
    case types.REMOVE_NOMINATED_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        nomState: false,
      }
    default:
      return state
  }
}

export default moviesReducer

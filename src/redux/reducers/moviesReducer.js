import * as types from '../types'

const moviesState = {
  results: {},
  moviesList: [],
  nomMovies: [],
  isLoading: false,
  searchValue: "",
  errorMessage: "",
}

export function moviesReducer(state = moviesState, action) {
  switch (action.type) {
    case types.GET_ALL_MOVIES_START:
      return {
        ...state,
        isLoading: true,
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
    case types.SET_NOMINATED_MOVIE:
      return {
        ...state,
        // nominatedMovie: action.payload,
        nomMovies: [...state.nomMovies, action.payload]
      }
    case types.REMOVE_NOMINATED_MOVIE:
      return {
        ...state,
        nomMovies: state.nomMovies.filter(movie => movie.imdbID !== action.payload)
      }
    default:
      return state
  }
}

export default moviesReducer

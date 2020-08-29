import * as types from '../types'

const moviesState = {
  results: {},
  moviesList: [],
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
    default:
      return state
  }
}

export default moviesReducer

import * as types from "../types"

export const setSearchFilter = (filterValue) => {
  return {
    type: types.SET_FILTER_VALUE,
    payload: filterValue,
  }
}

export const setNominatedMovie = (movie) => (dispatch) => {
  dispatch({
    type: types.SET_NOMINATED_MOVIE_START
  })

  try {
    dispatch({
      type: types.SET_NOMINATED_MOVIE_SUCCESS,
      payload: movie,
    })
  } catch (err) {
    dispatch({
      type: types.SET_NOMINATED_MOVIE_FAILURE,
    })
  }
}

export const removeNominatedMovie = (movie) => (dispatch) => {
  dispatch({
    type: types.REMOVE_NOMINATED_MOVIE_START
  })

  try {
    dispatch({
      type: types.REMOVE_NOMINATED_MOVIE_SUCCESS,
      payload: movie.imdbID,
    })
  } catch (err) {
    dispatch({
      type: types.REMOVE_NOMINATED_MOVIE_FAILURE,
    })
  }
}


export const getAllMovies = (searchValue) => async (dispatch) => {

  const MOVIE = `https://www.omdbapi.com/?apikey=d563d6b0&type=movie&s=${searchValue}`

  dispatch({
    type: types.GET_ALL_MOVIES_START
  })

  try {
    const allMovies = await fetch(MOVIE)
    const data = await allMovies.json()

    if (data.Error) {
      dispatch({
        type: types.GET_ALL_MOVIES_FAILURE,
        payload: data.Error,
      })
      throw data.Error
    } else {
      dispatch({
        type: types.GET_ALL_MOVIES_SUCCESS,
        payload: data
      })
    }
  } catch (data) {
    dispatch({
      type: types.GET_ALL_MOVIES_FAILURE,
      payload: data.Error,
    })
  }
}


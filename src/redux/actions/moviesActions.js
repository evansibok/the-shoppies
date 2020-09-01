import * as types from "../types"

export const setSearchFilter = (filterValue) => {
  console.log('action setSearchFilter', filterValue)
  return {
    type: types.SET_FILTER_VALUE,
    payload: filterValue,
  }
}

export const setNominatedMovie = (movie) => {
  console.log('action movie', movie)
  return {
    type: types.SET_NOMINATED_MOVIE,
    payload: movie,
  }
}

export const removeNominatedMovie = (movie) => {
  console.log('removed movie', movie)
  console.log('removed movie ID', movie.imdbID)
  return {
    type: types.REMOVE_NOMINATED_MOVIE,
    payload: movie.imdbID,
  }
}


export const getAllMovies = (searchValue) => async (dispatch) => {
  console.log("typeOf searchValue", typeof searchValue)

  // ""
  // undefined
  // one character
  // more than one character

  const MOVIE = `http://www.omdbapi.com/?apikey=d563d6b0&type=movie&s=${searchValue}`
  console.log('get all movies start')

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


import * as types from "../types"

export const setSearchFilter = (filterValue) => {
  console.log('action setSearchFilter', filterValue)
  return {
    type: types.SET_FILTER_VALUE,
    payload: filterValue,
  }
}

// const getString = (searchValue) => {
//   console.log('searchValue', searchValue)
//   if (searchValue && typeof searchValue === undefined) {
//     return "Batman"
//   } else if (searchValue && searchValue === "") {
//     return "Batman"
//   } else if (searchValue && searchValue.length > 1) {
//     return searchValue
//   } else if (searchValue && searchValue.length === 1) {
//     return "Batman"
//   }
//   return searchValue
// }

export const getAllMovies = (searchValue) => async (dispatch) => {
  console.log("typeOf searchValue", typeof searchValue)

  // ""
  // undefined
  // one character
  // more than one character

  const MOVIE = `http://www.omdbapi.com/?apikey=d563d6b0&type=movie&s=${searchValue}`
  // const MOVIE = `http://www.omdbapi.com/?apikey=d563d6b0`
  console.log('get all movies start')

  dispatch({
    type: types.GET_ALL_MOVIES_START
  })

  try {
    const allMovies = await fetch(MOVIE)
    const data = await allMovies.json()
    console.log('result data', data)

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
    console.log('Catch Error data', data.Error)
    dispatch({
      type: types.GET_ALL_MOVIES_FAILURE,
      payload: data.Error,
    })
  }
}

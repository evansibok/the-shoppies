import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import actions from '../redux/actions/'

const MovieCard = ({ movie }) => {
  const { setNominatedMovie } = actions
  let dispatch = useDispatch()

  const handleNominate = (evt) => {
    evt.preventDefault()
    movie["isNominated"] = true
    dispatch(setNominatedMovie(movie))
  }

  return (
    <MCard>
      <li>{movie.Title}{" "}{" "}({movie.Year})</li>
      <button
        type="button"
        disabled={movie.isNominated ? true : false}
        onClick={handleNominate}
        className={movie.isNominated ? "" : "nominate"}
      >
        {movie.isNominated ? "Nominated" : "Nominate"}
      </button>
    </MCard>
  )
}

export default MovieCard

const MCard = styled.div`
  display: flex;
  margin-top: 1em;
  font-size: 0.9rem;
  align-items: center;

  button {
    margin-left: 1em;
    border: none;
    padding: 0.3em 1em;
    border-radius: 3px;
    font-size: 0.8rem;
    color: #757575;

    &.nominate {
      background-color: #10ba76;
      color: #fff;

      &:hover {
        cursor: pointer;
      }
    }

    &.nominated {
      &:hover {
        cursor: unset;
      }
    }

    &:focus {
      outline: none;
    }

  }
`;
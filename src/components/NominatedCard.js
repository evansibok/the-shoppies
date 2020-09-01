import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'


import actions from '../redux/actions/'

function NominatedCard({ movie }) {
  const { removeNominatedMovie } = actions

  let dispatch = useDispatch()

  const handleRemoval = (evt) => {
    evt.preventDefault();
    movie["isNominated"] = false
    dispatch(removeNominatedMovie(movie))
  }

  return (
    <MCard>
      <li>{movie.Title}{" "}{" "}({movie.Year})</li>
      <button
        type="button"
        onClick={handleRemoval}
        className=""
      >
        {"Remove"}
      </button>
    </MCard>
  )
}

export default NominatedCard

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
    color: #f92c4f;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

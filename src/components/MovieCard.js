import React, { useState } from 'react'
import styled from 'styled-components'

const MovieCard = ({ movie }) => {
  const [nominate, setNominate] = useState(false)

  const handleNominate = (evt) => {
    evt.preventDefault()
    setNominate(!nominate)
  }

  return (
    <MCard>
      <li>{movie.Title}{" "}{" "}({movie.Year})</li>
      <button
        type="button"
        disabled={nominate === true || false}
        onClick={handleNominate}
        className={nominate === false ? "nominate" : ""}
      >
        {nominate === false ? "Nominate" : "Nominated"}
      </button>
    </MCard >
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
    }

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
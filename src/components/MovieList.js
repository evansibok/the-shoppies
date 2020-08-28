import React from 'react'
import styled from 'styled-components'

const MovieList = () => {
  return (
    // <div>
    <MList>
      <li>Rambo (1999)</li>
      <button type="button">Nominate</button>
    </MList>
    // </div>
  )
}

export default MovieList

const MList = styled.div`
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

    &:hover {
      cursor: pointer;
    }
  }
`;
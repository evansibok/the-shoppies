import React from 'react'
import styled from 'styled-components'

function MovieApp() {
  return (
    <Container>
      <h3>The Shoppies</h3>

      <div className="title-section">
        <h5>Movie title</h5>
        <input type="search" placeholder="Search..." />
      </div>

      <div>
        <div>
          <h4>Results for "ram"</h4>
        </div>
        <div>
          <h4>Nominations</h4>
        </div>
      </div>
    </Container>
  )
}

export default MovieApp

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 400px;
  background-color: #efedef;
  padding: 2em 4em;

  h3 {
    font-size: 1.3rem;
  }

  .title-section {
    background: #fff;
    margin-top: 1em;
    padding: 1em 2em;
    border-radius: 10px;

    h5 {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.3em;
    }

    input {
      width: 100%;
      height: 30px;
      padding-left: 1em;
      border-radius: 5px;
      margin-bottom: 0.5em;
    }

    input[type="search"]::placeholder {
      font-weight: 500;
      font-style: italic;
      letter-spacing: 0.05em;
    }
  }
`;
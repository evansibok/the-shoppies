import React from 'react'
import styled from 'styled-components'
import { IoMdSearch } from 'react-icons/io'

import MovieList from './MovieList'



function MovieApp() {
  return (
    <Container>
      <h3>The Shoppies</h3>

      <TitleSection className="title-section">
        <h5>Movie title</h5>
        <div className="search-con">
          <IoMdSearch />
          <input type="search" placeholder="Search..." />
        </div>
      </TitleSection>

      <BottomSection>
        <div className="results">
          <h4>Results for "ram"</h4>
          <ul>
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
          </ul>
        </div>
        <div className="noms">
          <h4>Nominations</h4>
          <ul>
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
            <MovieList />
          </ul>
        </div>
      </BottomSection>
    </Container>
  )
}

export default MovieApp

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 500px;
  background-color: #efedef;
  padding: 2em 4em;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;

  h3 {
    font-size: 1.3rem;
  }
`;

const TitleSection = styled.section`
  background: #fff;
  margin-top: 1em;
  padding: 1em 2em;
  border-radius: 10px;
  box-shadow: 0px 0px 18px -5px rgba(230,230,230,1);

  h5 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.3em;
  }

  .search-con {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e2e2e2;
    border-radius: 5px;

    svg {
      margin-left: 0.4em;
      margin-right: 0.4em;
    }
  }

  input {
    width: 100%;
    height: 30px;
    padding-left: 0.1em;
    border: none;

    &:focus {
      outline: none;
    }
  }
  
  input[type="search"]::placeholder {
    font-weight: 500;
    letter-spacing: 0.05em;
  }
`;

const BottomSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2em;

  h4 {
    font-size: 1rem;
    font-weight: 500;
  }

  .results {
    background: #fff;
    width: 50%;
    border-radius: 5px;
    padding: 1em;
    height: 250px;
    overflow-y: hidden;
    box-shadow: 0px 0px 18px -5px rgba(230,230,230,1);

    ul {
      height: 180px;
      overflow-y: scroll;
      padding-bottom: 1em;
    }
  }

  .noms {
    background: #fff;
    width: 45%;
    border-radius: 5px;
    height: fit-content;
    padding: 1em;
    box-shadow: 0px 0px 18px -5px rgba(230,230,230,1);
  }

`;
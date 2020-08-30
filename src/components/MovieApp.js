import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import { IoMdSearch } from 'react-icons/io'

import actions from "../redux/actions/"

import MovieCard from './MovieCard'


function MovieApp() {
  const { getAllMovies, setSearchFilter } = actions

  const dispatch = useDispatch()
  const state = useSelector(state => state.movies)
  const movies = useSelector(state => state.movies.moviesList)
  const searchVal = useSelector(state => state.movies.searchValue)
  console.log('state', state)
  console.log('movies state', movies)
  console.log('searchVal', searchVal)

  useEffect(() => {
    dispatch(getAllMovies(searchVal))
  }, [dispatch, getAllMovies, searchVal])


  const handleSearchChange = (evt) => {
    const { value } = evt.target
    dispatch(setSearchFilter(value))
  }

  return (
    <Container>
      <h3>The Shoppies</h3>

      <TitleSection className="title-section">
        <h5>Movie title</h5>
        <div className="search-con">
          <IoMdSearch />
          <input
            type="search"
            name="searchTitle"
            value={searchVal}
            placeholder="Search..."
            onChange={handleSearchChange}
          />
        </div>
      </TitleSection>

      <BottomSection>
        <div className="results">
          <h4>Results for: {`"${searchVal}"`}</h4>
          <ul>
            {
              state.isLoading
                ? (<p style={{
                  fontSize: "30px",
                  color: "#c1c1c1",
                }}>Loading...</p>)
                : movies.length === 0 ?
                  (<p style={{
                    fontSize: "20px",
                    color: "#c1c1c1",
                  }}>Please search movie above!</p>)
                  : (movies && movies.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  )))
            }
          </ul>
        </div>
        <div className="noms">
          <h4>Nominations</h4>
          <ul>
            {/* <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard /> */}
          </ul>
        </div>
      </BottomSection>
    </Container>
  )
}
// function mapStateToProps(state) {
//   return {
//     movieList: state.movies
//   }
// }


// export default connect({
//   mapStateToProps,
//   actions
// })(MovieApp)
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
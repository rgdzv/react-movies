import React, { useEffect } from 'react'
import './App.scss';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'
import Header from './components/header/Header'
import SearchForm from './components/search-form/SearchForm'
import { getMovies } from './redux/actions/actions'
import MovieDetails from './components/movie-details/MovieDetails'
import Movie from './components/movie/Movie'
import preloader from './img/preloader.gif'
import { useState } from 'react'
import Footer from './components/footer/Footer'
import EmptyResult from './components/empty-result/EmptyResult';

const App = () => {

  const { movies, loading, error } = useSelector(({ movies }) => movies)
  const [select, setSelect] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})
  const [search, setSearch] = useState(false)
  const dispatch = useDispatch()

  const handleSelect = (movie) => {
    setSelect(true)
    setSelectedMovie(movie)
  }

  const handleSelectBack = () => {
    setSelect(false)
    setSelectedMovie({})
  }

  const handleSearch = () => {
    setSearch(true)
    setSelect(false)
    setSelectedMovie({})
  }
  
  const emptySearchResult = () => {
    setSearch(false)
    dispatch(getMovies())
  }

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return (
    <>
      <Header>
        ReactMovies
      </Header>
      <Container style={{ maxWidth: '1000px' }}>
        <Row>
          <Col>
            <SearchForm dispatch={dispatch} handleSearch={handleSearch}/>
          </Col>
        </Row>
        <Row style={{ display: movies.length ? 'none' : '', minHeight: '73vh' }}>
          <Col align="center">
            {loading 
              ? <img src={preloader} alt="preloader" />
              : error
              ? <EmptyResult item={error} onClick={emptySearchResult}/>
              : !movies.length 
              ? <EmptyResult item="No movies found" onClick={emptySearchResult}/>
              : null
            }
          </Col>
        </Row>
        <Row style={{ display: !movies.length || select || error ? 'none' : '' }}>
          <Col>
            <div className="main__title">{search ? 'Results' : 'Trending movies of the day'}</div>
          </Col>
        </Row>  
        {select
          ? 
            <Row style={{ minHeight: '73vh' }}>
              <Col align="center">
                <MovieDetails selectedMovie={selectedMovie} handleBack={handleSelectBack}/>
              </Col>
            </Row>
          :
            <Row>
              {movies.map(item => (
                <Col key={item.id} align="center">
                  <Movie
                    className="movie"
                    item={item}
                    handleSelect={handleSelect}
                  />
                </Col>
              ))}
            </Row>
        }
        <Row justify="center">
          <Footer/>
        </Row>
      </Container>
    </>
  )
}

export default App;

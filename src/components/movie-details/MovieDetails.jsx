import React from 'react'
import Button from '../search-form/button/Button'
import './MovieDetails.scss'
import noposter from '../../img/noposter.jpg'
import PropTypes from 'prop-types'

const MovieDetails = ({ selectedMovie, handleBack }) => {
  return (
    <div className="movie__details">
      <img 
        className="movie__details__poster" 
        src={
          selectedMovie.poster_path !== null
            ? `https://image.tmdb.org/t/p/w200/${selectedMovie.poster_path}`
            : noposter  
        } 
        alt={selectedMovie.title}
      />
      <div className="movie__details__content">
        <div className="movie__details__title"><b>Title:</b> {selectedMovie.title}</div>
        <div className="movie__details__release"><b>Date of release:</b> {selectedMovie.release_date}</div>
        <div className="movie__details__rating"><b>Rating:</b> {selectedMovie.vote_average}</div>
        <div className="movie__details__overview"><b>Overview:</b> {selectedMovie.overview}</div>
        <Button
          className="search__button"
          onClick={handleBack}
        >
          BACK
        </Button>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  selectedMovie: PropTypes.object,
  handleBack: PropTypes.func,
}

MovieDetails.defaultProps = {
  selectedMovie: {},
  handleBack: ()=>{},
}

export default MovieDetails

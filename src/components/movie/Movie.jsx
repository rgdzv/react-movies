import React from 'react'
import './Movie.scss'
import PropTypes from 'prop-types'
import noposter from '../../img/noposter.jpg'

const Movie = ({ className, item, handleSelect }) => {
  return (
    <div className={className}>
      <div className="movie__poster"
        style={{background: item.poster_path !== null ? `url(https://image.tmdb.org/t/p/w200/${item.poster_path})` : `url(${noposter})`}}
        onClick={() => handleSelect(item)}
      >
        <div 
          className="movie__rating__number" 
          style={{backgroundColor: item.vote_average >= 6.0 ? '#3BB33B' : '#AAAAAA'}}
        >
          {item.vote_average ? item.vote_average : '-'}
        </div>
      </div>
      <div className="movie__title">{item.title.length > 25 ? item.title.slice(0, 25) + '...' : item.title}</div>
    </div>
  )
}

Movie.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  handleSelect: PropTypes.func,
}

Movie.defaultProps = {
  className: '',
  item: {},
  handleSelect: ()=>{}
}


export default Movie

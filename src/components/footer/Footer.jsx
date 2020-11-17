import React, { memo } from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <hr/>
      <p>
        ReactMovies is an app for render data from <a href="https://www.themoviedb.org">The Movie Database</a><br/>This project was created by <a href="https://github.com/rgdzv">Ramis Gadzhiomarov</a><br/> You can find code source <a href="https://github.com/rgdzv/react-movie-searcher">here</a> 
      </p>
    </div>
  )
}

export default memo(Footer)

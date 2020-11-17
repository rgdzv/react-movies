import React from 'react'
import './EmptyResult.scss'
import Button from '../search-form/button/Button'
import PropTypes from 'prop-types'

const EmptyResult = ({ onClick, item }) => {
  return (
    <div className="empty__search__result">
      <p>{item}</p>
      <Button
        className="search__button"
        onClick={onClick}
      >
        TO TRENDS
      </Button>
    </div>
  )
}

EmptyResult.propTypes = {
  item: PropTypes.string,
  onClick: PropTypes.func,
}

EmptyResult.defaultProps = {
  item: '',
  onClick: ()=>{},
}

export default EmptyResult
import React, { useState } from 'react'
import Button from './button/Button'
import Input from './input/Input'
import './SearchForm.scss'
import { searchMovie } from './../../redux/actions/actions'

const SearchForm = ({ dispatch, handleSearch }) => {
  
  const [text, setText] = useState('')

  const handleText = ({target: {value}}) => {
    setText(value)
  }

  const callSearchFunction = (e) => {
    e.preventDefault()
    dispatch(searchMovie(text))
    setText('')
    handleSearch()
  }
  
  return (
    <form className="search__form">
      <Input
        className="search__input"
        type="text"
        placeholder="Enter your movie name"
        onChange={handleText}
        value={text}
      />
      <Button
        className="search__button"
        type="submit"
        onClick={callSearchFunction}
      >
        SEARCH
      </Button>
    </form>
  )
}

export default SearchForm

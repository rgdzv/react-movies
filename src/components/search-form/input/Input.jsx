import React from 'react'
import './Input.scss'
import PropTypes from 'prop-types'

const Input = ({ className, placeholder, type, value, onChange }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  className: '',
  placeholder: '',
  type: '',
  value: '',
  onChange: () => {},
}

export default Input

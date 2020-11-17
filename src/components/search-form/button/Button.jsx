import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types'

const Button = ({ className,children, onClick, type }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  className: '',
  children: '',
  type: '',
  onClick: () => {},
}


export default Button

import React, { memo } from 'react'
import './Header.scss'
import PropTypes from 'prop-types'

const Header = ({ children }) => {
  return (
    <div className="header">
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.string,
}

Header.defaultProps = {
  children: '',
}

export default memo(Header)

import React from 'react'

function errorMEssages(props) {
  return (
    <div className="error-message">
      {props.children}
    </div>
  )
}

export default errorMEssages

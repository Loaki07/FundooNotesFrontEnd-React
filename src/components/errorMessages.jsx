import React from 'react'

function errorMEssages(props) {
  return (
    <div className="error-message text-left">
      {props.children}
    </div>
  )
}

export default errorMEssages

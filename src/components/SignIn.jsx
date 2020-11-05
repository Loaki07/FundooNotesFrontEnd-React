import React, {useState} from 'react'
import ColoredFundooHeader from './coloredFundoo.jsx'
import '../styles/login.scss'

const SignIn = () =>{
  return (
    <div className="login-container">
      <div className="login-card-wrapper">
        <form>
          <div className="text-left login-header">
            <ColoredFundooHeader />
          </div>
          <div className="text-left login-header">
            <ColoredFundooHeader />
          </div>
          <div className="text-left login-header">
            <ColoredFundooHeader />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
import React, {useState} from 'react'
import ColoredFundooHeader from '../utility/coloredFundoo.jsx'
import '../../styles/forgotPassword.scss'
import UserApis from "../../services/UserApis"
const { forgotPassword } = new UserApis();

const ForgotPassword = () =>{

  const [state, setState] = useState({
    emailId: "",
    loading: false
  })

  const handleChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, loading: true});
    const forgotPasswordUserObject = {
      emailId: state.emailId,
    }
    const result = await forgotPassword(forgotPasswordUserObject);
    setState({ ...state, loading: false});
    console.log(result);
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card-wrapper">
        <form className="forgot-password-form">
          <div className="text-center forgot-password-header">
            <ColoredFundooHeader />
          </div>
          <div className="text-center forgot-password-sub-header">
            Forgot Password
          </div>
          <div className="form-group text-left">
            <small className="forgot-password-small">
              Enter Email Address to receive the reset link
            </small>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="form-control" name="emailId" value={state.emailId} onChange={handleChange} autoComplete="off" ></input>
          </div>
          <div className="form-group">
            <a href="/" className="btn btn-primary" onClick={handleSubmit} >Receive Reset Password Link</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
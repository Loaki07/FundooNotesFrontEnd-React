import React, {useState} from 'react'
import ColoredFundooHeader from '../utility/coloredFundoo.jsx'
import '../../styles/resetPassword.scss'
import UserApis from "../../services/UserApis"
const { resetPassword } = new UserApis();

const ResetPassword = () =>{

  const [state, setState] = useState({
    password: "",
    confirm: "",
    loading: false
  })

  const handleChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, loading: true});
    const forgotPasswordUserObject = {
      password: state.password,
    }
    const result = await resetPassword(forgotPasswordUserObject);
    setState({ ...state, loading: false});
    console.log(result);
  }

  return (
    <div className="reset-password-container">
      <div className="reset-password-card-wrapper">
        <form className="reset-password-form">
          <div className="text-center reset-password-header">
            <ColoredFundooHeader />
          </div>
          <div className="text-center reset-password-sub-header">
            Reset Password
          </div>
          <div className="form-group text-left">
            <small className="reset-password-small">
              Enter New Password
            </small>
          </div>
          <div className="form-group">
            <input type="password" placeholder="New Password" className="form-control" name="password" value={state.password} onChange={handleChange} autoComplete="off" ></input>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm" className="form-control" name="confirm" value={state.confirm} onChange={handleChange} autoComplete="off" ></input>
          </div>
          <div className="form-group">
            <a href="/" className="btn btn-primary" onClick={handleSubmit} >Reset Password</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
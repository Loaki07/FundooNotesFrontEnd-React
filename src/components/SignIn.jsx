import React, {useState} from 'react'
import ColoredFundooHeader from './coloredFundoo.jsx'
import '../styles/login.scss'
import UserApis from "../services/UserApis"
const { signIn } = new UserApis();

const SignIn = () =>{

  const [state, setState] = useState({
    emailId: "",
    password: "",
    loading: false
  })

  const handleChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, loading: true});
    const loginUserObject = {
      emailId: state.emailId,
      password: state.password
    }
    const result = await signIn(loginUserObject);
    setState({ ...state, loading: false});
    console.log(result);
  }

  return (
    <div className="login-container">
      <div className="login-card-wrapper">
        <form className="login-form">
          <div className="text-center login-header">
            <ColoredFundooHeader />
          </div>
          <div className="text-center login-sub-header">
            Sign in
          </div>
          <div className="text-center login-sub-header">
            Use your Fundoo Account
          </div>

          {/* EmailId & password Section */}
          <div className="form-group">
            <input type="email" placeholder="Username" className="form-control" name="emailId" value={state.emailId} onChange={handleChange} autoComplete="off" ></input>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" className="form-control" name="password" value={state.password} onChange={handleChange} autoComplete="off" ></input>
          </div>
          <div className="form-group">
            <a href="/forgot-password" className="btn btn-primary" >Forgot password?</a>
          </div>
          {/* End EmailId & password Section */}

          {/* Create Account and login Links */}
          <div>
            <div className="form-group float-left">
              <a href="/register" className="btn btn-primary" >Create account</a>
            </div>
            <div className="form-group float-right">
              <a href="/" className="btn btn-primary" onClick={handleSubmit} >Login</a>
            </div>
            <div className="clearfix"></div>
          </div>
          {/* End of Create Account and login Links */}
        </form>
      </div>
    </div>
  )
}

export default SignIn
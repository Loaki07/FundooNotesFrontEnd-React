import React, { useState } from 'react'
import ColoredFundooHeader from '../utility/coloredFundoo.jsx'
import '../../styles/registration.scss'
import UserApis from "../../services/UserApis"
const { registerNewUser } = new UserApis();

const Registration = () =>{

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    confirm: "",
    loading: false
  })

  const handleChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({...state, loading: true});
    const registerUserObject = {
      firstName: state.firstName,
      lastName: state.lastName,
      emailId: state.emailId,
      password: state.password
    }
    const result = await registerNewUser(registerUserObject);
    setState({...state, loading: false});
    console.log(result);
  }

  return (
    <div className="registration-container">
      <div className="registration-card-wrapper">
        <div className="registration-elements">
          <form>
            <div className="text-left reg-header">
              <ColoredFundooHeader />
            </div>
            <div className="text-left reg-sub-header">Create your Fundoo Account</div>

            {/* First/Last Name Section */}
            <div className="divide-row d-flex justify-content-between">
              <div className="form-group reg-left-flex">
                <input type="text" placeholder="First name" className="form-control reg-form-input" name="firstName" value={state.firstName} onChange={handleChange} autoComplete="off" ></input>
              </div>
              <div className="form-group reg-right-flex">
                <input type="text" placeholder="Last name" className="form-control reg-form-input" name="lastName" value={state.lastName} onChange={handleChange} autoComplete="off" ></input>
              </div>
            </div>
            {/*End First/Last Name Section */}

            {/* EmailId/Username Section */}
            <div className="form-group names-fields">
              <input type="email" placeholder="Username" className="form-control reg-form-input-username" name="emailId" value={state.emailId} onChange={handleChange} autoComplete="off" ></input>
            </div>
            {/* End EmailId/Username Section */}

            {/* Password Section */}
            <div className="divide-row d-flex justify-content-between">
              <div className="form-group reg-left-flex">
                <input type="password" placeholder="Password" className="form-control reg-form-input" name="password" value={state.password} onChange={handleChange} autoComplete="off" ></input>
              </div>
              <div className="form-group reg-right-flex">
                <input type="password" placeholder="Confirm" className="form-control reg-form-input" name="confirm" value={state.confirm} onChange={handleChange} autoComplete="off" ></input>
              </div>
            </div>
            <div className="reg-form-input reg-small-padding">
              <small className="text-left">Use 8 or more characters with a mix of letters, numbers & symbols</small>
            </div>
            {/* End of Password Section */}

            {/* Sign-in and Register Links */}
            <div>
              <div className="form-group float-left">
                <a href="/" className="btn btn-primary" >Sign in instead</a>
              </div>
              <div className="form-group float-right">
                <a href="/" className="btn btn-primary" onClick={handleSubmit} >Next</a>
              </div>
              <div className="clearfix"></div>
            </div>
            {/* End of Sign-in and Register Links */}
          </form>
        </div>
        <div className="registration-elements-1">
          <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" className="j9NuTc TrZEUc"></img>
        </div>
      </div>
    </div>
  )
}

export default Registration
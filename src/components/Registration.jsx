import React, { Fragment, useState } from 'react'
import '../styles/registration.scss'

const Registration = () =>{

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    confirm: ""
  })

  const handleChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
    console.log(state);
  }

  return (
    <div className="registration-container">
      <div className="registration-card-wrapper">
        <div className="registration-elements">
          <form>
            <div className="text-left">Fundoo Notes</div>
            <div className="text-left">Create your Fundoo Account</div>

            {/* First/Last Name Section */}
            <div className="divide-row d-flex justify-content-between">
              <div className="form-group column-fields">
                <input placeholder="First name" className="form-control" name="firstName" value={state.firstName} onChange={handleChange}></input>
              </div>
              <div className="form-group column-fields">
                <input placeholder="Last name" className="form-control" name="lastName" value={state.lastName} onChange={handleChange}></input>
              </div>
            </div>
            {/*End First/Last Name Section */}

            {/* EmailId/Username Section */}
            <div className="form-group names-fields">
              <input placeholder="Username" className="form-control" name="emailId" value={state.emailId} onChange={handleChange}></input>
            </div>
            {/* End EmailId/Username Section */}

            {/* Password Section */}
            <div className="divide-row d-flex justify-content-between">
              <div className="form-group column-fields">
                <input placeholder="Password" className="form-control" name="password" value={state.password} onChange={handleChange}></input>
              </div>
              <div className="form-group column-fields">
                <input placeholder="Confirm" className="form-control" name="confirm" value={state.confirm} onChange={handleChange}></input>
              </div>
            </div>
            <small className="text-left">Use 8 or more characters with a mix of letters, numbers & symbols</small>
            {/* End of Password Section */}

            {/* Sign-in and Register Links */}
            <div>
              <div className="form-group float-left">
                <a href="/" className="btn btn-primary" >Sign in instead</a>
              </div>
              <div className="form-group float-right">
                <a href="/" className="btn btn-primary" >Next</a>
                </div>
              <div class="clearfix"></div>
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
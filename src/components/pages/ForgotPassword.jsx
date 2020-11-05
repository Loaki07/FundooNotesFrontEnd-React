import React, {useState} from 'react'
import ColoredFundooHeader from '../utility/coloredFundoo.jsx'
import '../../styles/forgotPassword.scss'
import UserApis from "../../services/UserApis"
import { Formik } from 'formik'
import * as Yup from 'yup'
const { forgotPassword } = new UserApis();

const initialValues = {
  emailId: ""
}

const validationSchema = Yup.object().shape({
  emailId: Yup.string()
              .email("Invalid email format")
              .required("Required")
})

const ForgotPassword = () =>{
  const [state, setState] = useState({
    emailId: "",
    loading: false
  })

  const handleFormChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleFormSubmit = (values) => {
    setState({ ...state, loading: true});
    const forgotPasswordUserObject = {
      emailId: state.emailId,
    }
    // const result = await forgotPassword(forgotPasswordUserObject);
    setState({ ...state, loading: false});
    console.log(state);
    // console.log(result);
    console.log(values);
  }

  return (
    <Formik 
      initialValues= {initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, handleChange, values, handleBlur, touched, errors })=> (
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
              <input 
                type="email" 
                placeholder="Email" 
                className="form-control" 
                name="emailId" 
                value={values.emailId} 
                onInput={handleChange}
                onChange={handleFormChange} 
                onBlur={handleBlur} 
                autoComplete="off" ></input>
              { errors.emailId && touched.emailId ? (
                <div className="forgot-password-error">{errors.emailId}</div> 
              ) : null}
            </div>
            <div className="form-group">
              <a href="/" type="submit" className="btn btn-primary" onClick={handleSubmit} >Receive Reset Password Link</a>
            </div>
          </form>
        </div>
      </div>
      )} 
    </Formik>
  )
}

export default ForgotPassword
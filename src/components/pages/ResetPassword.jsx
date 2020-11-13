import React, {useState} from 'react'
import ColoredFundooHeader from '../coloredFundoo.jsx'
import errorMessages from '../errorMessages.jsx'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../../styles/resetPassword.scss'
import UserApis from "../../services/UserApis"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
toast.configure()
const { resetPassword } = new UserApis();

const initialValues = {
  password: "",
  confirm: "",
}

const validationSchema = Yup.object().shape({
  password: Yup.string()
               .min(6, 'Minimum 6 characters required!')
               .required('Required!'),
  confirm:  Yup.string()
               .oneOf(
                 [Yup.ref('password'), null],
                  'Passwords do not match',
                  )
               .required('Required!'),
})

const ResetPassword = (props) =>{
  const [state, setState] = useState({
    password: "",
    confirm: "",
    loading: false
  })

  const handleFormChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleFormSubmit = async (values) => {
    try {
      setState({ ...state, loading: true});
      const forgotPasswordUserObject = {
        password: state.password,
      }
      const result = await resetPassword(forgotPasswordUserObject);
      setState({ ...state, loading: false});
      console.log(result);
      console.log(state);
      if (result.status === 200) {
        toast.success('Password Reset Successfully', {position: toast.POSITION.TOP_CENTER});
        props.history.push('/')
      }
    } catch (error) {
      toast.error(error.message, {position: toast.POSITION.TOP_CENTER});
    }
  }

  return (
    <Formik 
      initialValues= {initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, handleChange, values, handleBlur })=> (
        <div className="reset-password-container">
          <div className="reset-password-card-wrapper">
            <Form className="reset-password-form">
              <div className="text-center reset-password-header">
                <ColoredFundooHeader />
              </div>
              <div className="text-center reset-password-sub-header">
                Reset Password
              </div>
              <div className="form-group text-left">
                <small className="reset-password-small">
                  Fill new password details
                </small>
              </div>
              <div className="form-group">
                <Field 
                  type="password" 
                  placeholder="New Password" 
                  className="form-control" 
                  name="password" 
                  value={values.password} 
                  onInput={handleChange}
                  onChange={handleFormChange}  
                  autoComplete="off" 
                ></Field>
                <ErrorMessage 
                  name="password" 
                  component={errorMessages} 
                ></ErrorMessage>
              </div>
              <div className="form-group">
                <Field 
                  type="password" 
                  placeholder="Confirm new password" 
                  className="form-control" 
                  name="confirm" 
                  value={values.confirm} 
                  onInput={handleChange}
                  onChange={handleFormChange}
                  autoComplete="off" 
                ></Field>
                <ErrorMessage 
                  name="confirm" 
                  component={errorMessages} 
                ></ErrorMessage>
              </div>
              <div className="form-group">
                <a 
                  href="/" 
                  type="submit"
                  className="btn btn-primary" 
                  onClick={handleSubmit} 
                >Reset Password</a>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default ResetPassword
import React, {useState} from 'react'
import ColoredFundooHeader from '../coloredFundoo.jsx'
import errorMessages from '../errorMessages.jsx'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../../styles/login.scss'
import UserApis from "../../services/UserApis"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
toast.configure()
const { signIn } = new UserApis();

const initialValues = {
  emailId: "",
  password: ""
}

const validationSchema = Yup.object().shape({
  emailId: Yup.string()
              .email("Invalid email format")
              .required("Required!"),
  password: Yup.string()
               .min(6, 'Minimum 6 characters required!')
               .required('Required!'),
})


const SignIn = (props) =>{
  const [state, setState] = useState({
    emailId: "",
    password: "",
    loading: false
  })

  const handleFormChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleFormSubmit = async (values) => {
    try {
      setState({ ...state, loading: true});
      const loginUserObject = {
        emailId: state.emailId,
        password: state.password
      }
      const result = await signIn(loginUserObject);
      setState({ ...state, loading: false});
      console.log(result);
      if (result.status === 200) {
        toast.success('Login Successfull!', {position: toast.POSITION.TOP_CENTER});
        localStorage.setItem('token', result.data.token);
        props.history.push('/dashboard')
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
        <div className="login-container">
          <div className="login-card-wrapper">
            <Form className="login-form">
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
                <Field 
                  type="email" 
                  placeholder="Username" 
                  className="form-control" 
                  name="emailId" 
                  value={values.emailId} 
                  onInput={handleChange}
                  onChange={handleFormChange} 
                  autoComplete="off" 
                ></Field>
                <ErrorMessage 
                  name="emailId" 
                  component={errorMessages} 
                ></ErrorMessage>
              </div>
              <div className="form-group">
                <Field 
                  type="password" 
                  placeholder="Password" 
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
                <a 
                  href="/forgot-password" 
                  className="btn btn-primary link-buttons" 
                >Forgot password?</a>
              </div>
              {/* End EmailId & password Section */}

              {/* Create Account and login Links */}
              <div>
                <div className="form-group float-left">
                  <a 
                    href="/register" 
                    className="btn btn-primary link-buttons" 
                  >Create account</a>
                </div>
                <div className="form-group float-right">
                  <a 
                    href="/" 
                    type="submit"
                    className="btn btn-primary" 
                    onClick={handleSubmit} 
                  >Login</a>
                </div>
                <div className="clearfix"></div>
              </div>
              {/* End of Create Account and login Links */}
            </Form>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default SignIn
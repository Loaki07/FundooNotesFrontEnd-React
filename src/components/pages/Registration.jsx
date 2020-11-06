import React, { useState } from 'react'
import ColoredFundooHeader from '../utility/coloredFundoo.jsx'
import errorMessages from '../utility/errorMessages.jsx'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../../styles/registration.scss'
import UserApis from "../../services/UserApis"
const { registerNewUser } = new UserApis();

const initialValues = {
  firstName: "",
  lastName: "",
  emailId: "",
  password: "",
  confirm: "",
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
                .min(3, 'Minimum 3 characters required!')
                .matches(/^[A-Za-z]+$/, "Cannot contain numbers!")
                .required('Required!'),
  lastName: Yup.string()
               .min(3, 'Minimum 3 characters required!')
               .matches(/^[A-Za-z]+$/, "Cannot contain numbers!")
               .required('Required!'),
  emailId: Yup.string()
              .email("Invalid email format")
              .required("Required!"),
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

const Registration = () =>{

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    confirm: "",
    loading: false
  })

  const handleFormChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleFormSubmit = async (values) => {
    // event.preventDefault();
    setState({...state, loading: true});
    const registerUserObject = {
      firstName: state.firstName,
      lastName: state.lastName,
      emailId: state.emailId,
      password: state.password
    }
    const result = await registerNewUser(registerUserObject);
    setState({...state, loading: false});
    // console.log(state);
    console.log(result);
  }

  return (
    <Formik
      initialValues= {initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, handleChange, values, handleBlur, errors, touched })=> (
        <div className="registration-container">
          <div className="registration-card-wrapper">
            <div className="registration-elements">
              <Form>
                <div className="text-left reg-header">
                  <ColoredFundooHeader />
                </div>
                <div className="text-left reg-sub-header">Create your Fundoo Account</div>

                {/* First/Last Name Section */}
                <div className="divide-row d-flex justify-content-between">
                  <div className="form-group reg-left-flex">
                    <Field 
                      type="text" 
                      placeholder="First name" className="form-control reg-form-input" name="firstName" 
                      value={values.firstName} 
                      onInput={handleChange}
                      onChange={handleFormChange} autoComplete="off" 
                    ></Field>
                    <ErrorMessage 
                      name="firstName" 
                      component={errorMessages} 
                    ></ErrorMessage>  
                  </div>
                  <div className="form-group reg-right-flex">
                    <Field 
                      type="text" 
                      placeholder="Last name" className="form-control reg-form-input" name="lastName" 
                      value={values.lastName} 
                      onInput={handleChange}
                      onChange={handleFormChange} autoComplete="off" 
                    ></Field>
                    <ErrorMessage 
                      name="lastName"
                      component={errorMessages} 
                    ></ErrorMessage> 
                  </div>
                </div>
                {/*End First/Last Name Section */}

                {/* EmailId/Username Section */}
                <div className="form-group names-fields">
                  <Field 
                    type="email" 
                    placeholder="Username" className="form-control reg-form-input-username" 
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
                {/* End EmailId/Username Section */}

                {/* Password Section */}
                <div className="divide-row d-flex justify-content-between">
                  <div className="form-group reg-left-flex">
                    <Field 
                      type="password" 
                      placeholder="Password" 
                      className="form-control reg-form-input" 
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
                  <div className="form-group reg-right-flex">
                    <Field 
                      type="password" 
                      placeholder="Confirm" 
                      className="form-control reg-form-input" 
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
                </div>
                <div className="reg-form-input reg-small-padding">
                  <small className="text-left">Use 8 or more characters with a mix of letters, numbers & symbols</small>
                </div>
                {/* End of Password Section */}

                {/* Sign-in and Register Links */}
                <div>
                  <div className="form-group float-left">
                    <a 
                      href="/" 
                      className="btn btn-primary" 
                    >Sign in instead</a>
                  </div>
                  <div className="form-group float-right">
                    <a 
                      href="/" 
                      className="btn btn-primary" 
                      onClick={handleSubmit} 
                    >Next</a>
                  </div>
                  <div className="clearfix"></div>
                </div>
                {/* End of Sign-in and Register Links */}
              </Form>
            </div>
            <div className="registration-elements-1">
              <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" className="j9NuTc TrZEUc"></img>
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default Registration
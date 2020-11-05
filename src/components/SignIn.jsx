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
    setState({...state, loading: true});
    const loginUserObject = {
      emailId: state.emailId,
      password: state.password
    }
    const result = await signIn(loginUserObject);
    setState({...state, loading: false});
    console.log(result);
  }

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
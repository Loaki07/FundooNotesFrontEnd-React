import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class UserApis {
  registerNewUser = (data) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'register', data)
      .catch((error) => error);
  };

  signIn = (data) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'login', data)
      .catch((error) => error);
  };

  homepage = () => {
    return axios
      .get(process.env.REACT_APP_FUNDOO_API_URL)
      .catch((error) => error);
  };

  forgotPassword = (data) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'forgotPassword', data)
      .catch((error) => error);
  };

  resetPassword = (data, token) => {
    return axios
      .put(process.env.REACT_APP_FUNDOO_API_URL + 'resetpassowd' + token, data)
      .catch((error) => error);
  };
}

export default UserApis;

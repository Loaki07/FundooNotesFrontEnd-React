import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class UserApis {
  registerNewUser = async (data) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'register', data)
      .then((res) => res.data)
      .catch((error) => error);
  };

  signIn = async (data) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'login', data)
      .then((res) => res.data)
      .catch((error) => error);
  };

  homepage = async () => {
    return axios
      .get(process.env.REACT_APP_FUNDOO_API_URL)
      .then((res) => res.data)
      .catch((error) => error);
  };

  forgotPassword = async (data) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'forgotPassword', data)
      .then((res) => res.data)
      .catch((error) => error);
  };

  resetPassword = async (data, token) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'resetpassowd' + token, data)
      .then((res) => res.data)
      .catch((error) => error);
  };
}

export default UserApis;

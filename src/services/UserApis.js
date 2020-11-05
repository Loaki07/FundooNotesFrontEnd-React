import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class UserApis {
  registerNewUser = async (data) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'register', data)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };

  signIn = async (data) => {
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'login', data)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };

  signIn = async () => {
    return axios
      .get(process.env.REACT_APP_FUNDOO_API_URL)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };
}

export default UserApis;

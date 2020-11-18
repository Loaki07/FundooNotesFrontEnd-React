import ApiRequests from './ApiRequests';
import dotenv from 'dotenv';
dotenv.config();

const { get, post } = new ApiRequests();

class UserApis {
  registerNewUser = (data) => {
    const url = process.env.REACT_APP_FUNDOO_API_URL + 'register';
    return post(url, data);
  };

  signIn = (data) => {
    const url = process.env.REACT_APP_FUNDOO_API_URL + 'login';
    return post(url, data);
  };

  homepage = () => {
    const url = process.env.REACT_APP_FUNDOO_API_URL;
    return get(url);
  };

  forgotPassword = (data) => {
    const url = process.env.REACT_APP_FUNDOO_API_URL + 'forgotPassword';
    return post(url, data);
  };
}

export default UserApis;

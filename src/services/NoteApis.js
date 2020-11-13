import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class NoteApis {
  createNote = (data, token) => {
    const headersObject = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return axios
      .post(process.env.REACT_APP_FUNDOO_API_URL + 'users/notes', data, headersObject)
      .then((res) => res)
      .catch((error) => error);
  };

  getNotes = (token) => {
    const headersObject = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return axios
      .get(process.env.REACT_APP_FUNDOO_API_URL + 'users/notes', headersObject)
      .then((res) => res)
      .catch((error) => error);
  };
}
export default NoteApis;

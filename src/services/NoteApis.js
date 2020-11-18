import ApiRequests from './ApiRequests';
import dotenv from 'dotenv';
dotenv.config();

const { getWithAuth, postWithAuth } = new ApiRequests();

class NoteApis {
  createNote = (data, token) => {
    const url = process.env.REACT_APP_FUNDOO_API_URL + 'users/notes';
    return postWithAuth(url, data, token);
  };

  getNotes = (token) => {
    const url = process.env.REACT_APP_FUNDOO_API_URL + 'users/notes';
    return getWithAuth(url, token);
  };
}
export default NoteApis;

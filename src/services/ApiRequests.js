import axios from 'axios';

class ApiRequests {
  getHeadersObject = (token) => {
    return {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
  };

  get = (url) => {
    return axios
      .get(url)
      .then((res) => res)
      .catch((error) => error);
  };

  post = (url, data) => {
    return axios
      .post(url, data)
      .then((res) => res)
      .catch((error) => error);
  };

  postWithAuth = (url, data, token) => {
    const headersObject = this.getHeadersObject(token);
    return axios
      .post(url, data, headersObject)
      .then((res) => res)
      .catch((error) => error);
  };

  getWithAuth = (url, token) => {
    const headersObject = this.getHeadersObject(token);
    return axios
      .get(url, headersObject)
      .then((res) => res)
      .catch((error) => error);
  };
}

export default ApiRequests;

import axios from 'axios';

const BASE_URI = process.env.REACT_APP_API_URL;

const API = axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-Type": "application/json",
  }
});

export const sendEmail = async (data) => {
  return API.post('/sendMail', data).then(res => res.data);
}

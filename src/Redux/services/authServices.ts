import axios from 'axios';
import {API_URL_USER} from '../../Constants/api';
import {Login, Register} from '../../Models/User';

export const LoginAsync = async (data: Login) => {
  let response;
  try {
    response = await axios.post(API_URL_USER + '/login', data);
  } catch (error) {
    return error;
  }
  return {user: response.data};
};

export const RegisterAsync = async (data: Register) => {
  let response;
  try {
    response = await axios.post(API_URL_USER + '/', data);
  } catch (error) {
    return error;
  }
  console.log('RegisterAsync: ', response.data);

  return response.data;
};

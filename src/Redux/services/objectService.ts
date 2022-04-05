import axios from 'axios';
import {API_URL_OBJECTS} from '../../Constants/api';

export const GetObjectsAsync = async (token: string) => {
  let response = await axios.get(API_URL_OBJECTS, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

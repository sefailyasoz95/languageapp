import axios from 'axios';
import {API_URL_ANIMALS, API_URL_CATEGORIES} from '../../Constants/api';

export const GetSomeDataAsync = async (data: any) => {
  let response = await axios.get('');
  return response.data;
};

export const GetCategoriesAsync = async () => {
  let response = await axios.get(API_URL_CATEGORIES);
  return response.data;
};

export const GetAnimalsAsync = async () => {
  let response = await axios.get(API_URL_ANIMALS);
  return response.data;
};

export const GetMenuData = async () => {
  let response = await axios.get(API_URL_ANIMALS);
  return response.data;
};

export const services = {GetSomeDataAsync};

import axios from 'axios';
import {API_URL_CATEGORIES, CATEGORY_BY_NAME_URL} from '../../Constants/api';

export const GetCategoriesAsync = async (token: string) => {
  let response;
  try {
    response = await axios.get(API_URL_CATEGORIES, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data;
  } catch (error) {
    console.log('GetCategoriesAsync error: ', error);
  }
};
export const GetCategoryByNameAsync = async (
  token: string,
  categoryName: string,
) => {
  let response = await axios.get(CATEGORY_BY_NAME_URL + categoryName, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

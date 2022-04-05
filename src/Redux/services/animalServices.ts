import axios from 'axios';
import {
  API_URL_ANIMALS,
  API_URL_CATEGORIES,
  ANIMAL_BY_NAME_URL,
  CATEGORY_BY_NAME_URL,
} from '../../Constants/api';

export const GetAnimalsAsync = async (token: string) => {
  let response = await axios.get(API_URL_ANIMALS, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

export const GetAnimalByNameAsync = async (
  token: string,
  animalName: string,
) => {
  let response = await axios.get(ANIMAL_BY_NAME_URL + animalName, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return response.data;
};

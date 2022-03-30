import axios from 'axios';
import {ANIMAL_BY_NAME_URL} from '../Constants/api';

export const getCat = async () => {
  let i = Math.floor(Math.random() * 5);
  let result = await axios.get(ANIMAL_BY_NAME_URL + 'Cat');
  console.log('result: ', result.data);

  return {
    status: result.status,
    data: result.data[i],
  };
  // try {

  // } catch (error) {
  //   console.log('cat error: ', error);
  //   return {
  //     status: 400,
  //     data: error,
  //   };
  // }
};

export const getDog = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(ANIMAL_BY_NAME_URL + 'Dog');
    console.log('get Dog:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('get dog error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getBunny = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(ANIMAL_BY_NAME_URL + 'Bunny');

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('bunny error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getDuck = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(ANIMAL_BY_NAME_URL + 'Duck');
    console.log('get duck:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('duck error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getFox = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(ANIMAL_BY_NAME_URL + 'Fox');
    console.log('get fox:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('fox error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getKoala = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${ANIMAL_BY_NAME_URL}Koala`);
    console.log('get koala:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('koala error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getPanda = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${ANIMAL_BY_NAME_URL}Panda`);
    console.log('get panda:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('panada error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getElephant = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${ANIMAL_BY_NAME_URL}Elephant`);
    console.log('get elephant:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('elephant error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getLion = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${ANIMAL_BY_NAME_URL}Lion`);
    console.log('getLion:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('lion error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getMonkey = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${ANIMAL_BY_NAME_URL}Monkey`);
    console.log('getMonkey:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('monkey error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

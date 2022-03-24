import axios from 'axios';
import {ANIMAL_BY_NAME_URL, API_URL_ANIMAL} from '../Constants/api';

export const getcat = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(ANIMAL_BY_NAME_URL + 'Cat');
    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('caat error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getdog = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(ANIMAL_BY_NAME_URL + 'Dog');
    console.log('getdog:', i);

    return {
      status: result.status,
      data: result.data[i],
    };
  } catch (error) {
    console.log('getdog error: ', error);
    return {
      status: 400,
      data: error,
    };
  }
};

export const getbunny = async () => {
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

export const getduck = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(ANIMAL_BY_NAME_URL + 'Duck');
    console.log('getduck:', i);

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

export const getfox = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${API_URL_ANIMAL}fox`);
    console.log('getfox:', i);

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

export const getkoala = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${API_URL_ANIMAL}koala`);
    console.log('getkoala:', i);

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

export const getpanda = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${API_URL_ANIMAL}panda`);
    console.log('getpanda:', i);

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

export const getelephant = async () => {
  let i = Math.floor(Math.random() * 5);
  try {
    let result = await axios.get(`${API_URL_ANIMAL}elephant`);
    console.log('getelephant:', i);

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
    let result = await axios.get(`${API_URL_ANIMAL}lion`);
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
    let result = await axios.get(`${API_URL_ANIMAL}monkey`);
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

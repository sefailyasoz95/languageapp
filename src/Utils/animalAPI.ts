import axios from 'axios';
import {numbers} from '../Constants/data';
import {IAnimal} from '../Constants/Types/Animal';

export const getcat = async () => {
  let x: any;
  await axios.get('https://aws.random.cat/meow').then((res: any) => {
    x = res.data?.file;
  });
  return x;
};

export const getdog = async () => {
  let id = Math.floor(Math.random() * (6 - 1) + 1);
  try {
    let result = await axios.get(
      `https://6231097b05f5f4d40d724730.mockapi.io/api/v1/dogs/${id}`,
    );

    return {
      status: result.status,
      data: result.data,
    };
  } catch (error) {
    return {
      status: 400,
      data: error,
    };
  }
};

export const getbunny = async () => {
  let x: any;
  await axios
    .get('https://api.bunnies.io/v2/loop/random/?media=gif,png')
    .then((res: any) => {
      x = res.data?.media.poster;
    });
  return x;
};

export const getduck = async () => {
  let x: any;
  await axios
    .get('https://random-d.uk/api/v1/random?type=png')
    .then((res: any) => {
      x = res.data?.url;
    });
  return x;
};

export const getfox = async () => {
  let x: any;
  await axios.get('https://randomfox.ca/floof/').then((res: any) => {
    x = res.data?.image;
  });
  return x;
};

export const getshiba = async () => {
  let x: any;
  await axios.get('http://shibe.online/api/shibes').then((res: any) => {
    x = res.data[0];
  });
  return x;
};

export const getkoala = async () => {
  let x: any;
  await axios.get('https://some-random-api.ml/img/koala').then((res: any) => {
    x = res.data?.link;
  });
  return x;
};

export const getpanda = async () => {
  let id = Math.floor(Math.random() * (6 - 1) + 1);
  try {
    let result = await axios.get(
      `https://6231097b05f5f4d40d724730.mockapi.io/api/v1/pandas/${id}`,
    );

    return {
      status: result.status,
      data: result.data,
    };
  } catch (error) {
    return {
      status: 400,
      data: error,
    };
  }
};

export const getelephant = async () => {
  let id = Math.floor(Math.random() * (6 - 1) + 1);
  try {
    let result = await axios.get(
      `https://6231097b05f5f4d40d724730.mockapi.io/api/v1/elephant/${id}`,
    );

    return {
      status: result.status,
      data: result.data,
    };
  } catch (error) {
    return {
      status: 400,
      data: error,
    };
  }
};

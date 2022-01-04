import axios from 'axios';

export const getcat = async () => {
  let x: any;
  await axios.get('https://aws.random.cat/meow').then((res: any) => {
    x = res.data?.file;
  });
  return x;
};

export const getdog = async () => {
  let x: any;
  await axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then((res: any) => {
      x = res.data?.message;
    });
  return x;
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
  let x: any;
  await axios.get('https://some-random-api.ml/img/panda').then((res: any) => {
    x = res.data?.link;
  });
  return x;
};

export const getelephant = async () => {
  let x: any;
  await axios
    .get('https://elephant-api.herokuapp.com/elephants/sex/male')
    .then((res: any) => {
      x = res.data[Math.floor(Math.random() * 25)];
    });

  return x.image.includes('missing') || x.image === undefined
    ? 'https://listelist.com/wp-content/uploads/2017/05/210-600x375.jpg'
    : x.image;
};

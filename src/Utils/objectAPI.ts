import axios from 'axios';

export const getObject = async (objectName: string) => {
  let x: any;
  await axios
    .get(`https://source.unsplash.com/500x500/?${objectName}`)
    .then(res => {
      console.log('res.data: ', res.data.url);
      //   x = res.data;
    });
  return x;
};

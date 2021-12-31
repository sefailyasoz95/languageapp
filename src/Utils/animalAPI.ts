import axios from "axios"
/**
 * Get a random image of a cat!
 *
 */
 export const getcat = async () => {
    return axios.get("https://aws.random.cat/meow").then((res) => res.data?.file);
  };
  
  /**
   * Get a random image of a dog!
   *
   */
  export const getdog = async () => {
    return axios.get("https://dog.ceo/api/breeds/image/random").then(
      (res) => res.data?.message
    );
  };
  
  /**
   * Get a random image of a bunny!
   *
   */
  export const getbunny = async () => {
    return axios.get(
      "https://api.bunnies.io/v2/loop/random/?media=gif,png"
    ).then((res) => res.data?.media.poster);
  };
  
  /**
   * Get a random image of a duck!
   *
   */
  export const getduck = async () => {
    return axios.get("https://random-d.uk/api/v1/random?type=png").then(
      (res) => res.data?.url
    );
  };
  
  /**
   * Get a random image of a fox!
   *
   */
  export const getfox = async () => {
    return axios.get("https://randomfox.ca/floof/").then(
      (res) => res.data?.image
    );
  };
  
  /**
   * Get a random image of a shiba!
   *
   */
  export const getshiba = async () => {
    return axios.get("http://shibe.online/api/shibes").then(
      (res) => res.data[0]
      );
  };
  
  /**
   * Get a random image of a koala!
   *
   */
  export const getkoala = async () => {
    return axios.get("https://some-random-api.ml/img/koala").then(
      (res) => res.data?.link
    );
  };
  
  /**
   * Get a random image of a panda!
   *
   */
  export const getpanda = async () => {
    return axios.get("https://some-random-api.ml/img/panda").then(
      (res) => res.data?.link
    );
  };
  export const getelephant = async () => {
    let response = await axios.get("https://elephant-api.herokuapp.com/elephants/sex/male").then(
      (res) => res.data
    );
    let newElephant:any;
    newElephant = response[Math.floor(Math.random() * 25)]
    console.log("newElephant.imageÇ", newElephant.image);
    
    return newElephant.image.includes("missing") ? "https://listelist.com/wp-content/uploads/2017/05/210-600x375.jpg" : newElephant.image
  };


import axios from "axios";

axios.defaults.withCredentials = true; 

const instance = axios.create({
  baseURL: `https://everyone-s-post.herokuapp.com/`,
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://port-0-everyone-s-post-dpuqy925lbnnny33.gksl2.cloudtype.app/",
  headers: { withCredentials: true },
});

export default instance;

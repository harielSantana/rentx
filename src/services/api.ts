import axios from "axios";

const api = axios.create({
  baseUrl: "htt p://192.168.0.107:3333",
});

export { api };

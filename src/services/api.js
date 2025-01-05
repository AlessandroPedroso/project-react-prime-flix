//Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=5f40f98f5b26a7077d60b74523b80be3
import axios from "axios";
import { API_KEY } from "../config";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: "pt-BR",
  },
});

export default api;

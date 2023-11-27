import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const basicAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

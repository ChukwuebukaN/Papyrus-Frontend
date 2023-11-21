/* eslint-disable no-param-reassign */
import axios from "axios";

/** Base Url for Unsplash API  */
const apiUrl = "https://api.unsplash.com/";

/** Unsplash Access Key */
const unsplashAccessKey = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

/** Axios Config for sending requests */
const unsplashApi = axios.create({
  baseURL: apiUrl,
});
unsplashApi.interceptors.request.use(async (config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers.Authorization = `Client-ID ${unsplashAccessKey}`;
  return config;
});

export { unsplashApi, unsplashAccessKey };

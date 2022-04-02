// import react from "react";
import axios from "axios";
// Default config options
const defaultOptions = {
  baseURL: "http://localhost:2002",
  headers: {
    "Content-Type": "application/json",
  },
};

// Create instance
let api = axios.create(defaultOptions);

// Set the AUTH token for any request
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `${token}` : "";
  return config;
});
export default api;

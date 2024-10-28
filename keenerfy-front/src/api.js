import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5006"
})

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
  
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, function (error) {
  
    return Promise.reject(error);
  });
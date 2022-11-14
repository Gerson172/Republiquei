import axios from "axios";

const api = axios.create({
    baseURL: 'https://apirepubliquei.azurewebsites.net/api/'
  });
  
export default api;
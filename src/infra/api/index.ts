import axios from "axios";

const api = axios.create({
    baseURL: 'https://apirepubliquei.azurewebsites.net/api',
    responseType: 'json'
  });
  
  
export default api;
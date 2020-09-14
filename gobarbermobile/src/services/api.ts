import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiteste.com.br',
});

export default api;

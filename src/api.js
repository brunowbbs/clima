import axios from 'axios';

export const key = '49316412';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;
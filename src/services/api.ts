import axio from 'axios';

const api = axio.create({
  baseURL: 'https://api.github.com',
});

export default api;

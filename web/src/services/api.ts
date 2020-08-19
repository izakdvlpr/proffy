import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-server-deploy.zevdvlpr.repl.co/'
});

export default api;

import axios from 'axios';

const api = axios.create({baseURL: 'http://rockerseat-node.herokuapp.com/api'});

export default api;
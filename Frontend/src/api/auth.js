import axios from 'axios';

const API = 'http://localhost:2001/api'

export const registerRequest = user => axios.post(`${API}/register`, user);
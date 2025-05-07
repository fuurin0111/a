import axios from 'axios';

export async function login({ email, password }) {
  // proxy /auth/login → localhost:5000/auth/login
  const res = await axios.post('/auth/login', { email, password });
  return res.data; 
}
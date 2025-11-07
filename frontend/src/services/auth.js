import apiAuth from './apiAuth';

export const signup = async (name, email, password) => {
  const res = await apiAuth.post('/auth/signup', { name, email, password });
  return res.data;
};

export const login = async (email, password) => {
  const res = await apiAuth.post('/auth/login', { email, password });
  return res.data;
};

export const getMe = async (token) => {
  const res = await apiAuth.get('/auth/me', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const logout = async (token) => {
  const res = await apiAuth.get('/auth/logout', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};
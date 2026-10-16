import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/client.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('ErpMgmt_token');

    if (!token) {
      setReady(true);
      return;
    }

    api
      .get('/auth/me')
      .then(({ data }) => setUser(data.data))
      .catch(() => localStorage.removeItem('ErpMgmt_token'))
      .finally(() => setReady(true));
  }, []);

  async function login(email, password) {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('ErpMgmt_token', data.data.token);
    setUser(data.data.user);
  }

  function logout() {
    localStorage.removeItem('ErpMgmt_token');
    setUser(null);
  }

  return <AuthContext.Provider value={{ user, ready, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);


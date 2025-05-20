import { useState, useEffect } from 'react';
import { authApi } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate  = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      setUser(userData);
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await authApi.index(username, password);
      const data = response.data;
      
      if (data.accessToken) {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        return { success: true };
      }
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/auth/login')
  };

  return { user, loading, login, logout };
};
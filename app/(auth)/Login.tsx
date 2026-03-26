import LoginForm from '@/src/components/auth/LoginForm';
import { authService } from '@/src/services/authService';
import React from 'react';

const Login = () => {
  const login = async (email: string, password: string) => {
    try {
      const res = await authService.login(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return <LoginForm onSubmit={login}></LoginForm>;
};

export default Login;

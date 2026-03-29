import LoginForm from '@/src/components/auth/LoginForm';
import { authService } from '@/src/services/authService';
import { useRouter } from 'expo-router';
import React from 'react';

const Login = () => {
  const router = useRouter();
  const login = async (email: string, password: string) => {
    try {
      await authService.login(email, password);
      console.log('you logged in successfully!');
      router.replace('/(tabs)');
    } catch (error) {
      console.log(error);
    }
  };
  return <LoginForm onSubmit={login}></LoginForm>;
};

export default Login;

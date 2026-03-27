import SignForm from '@/src/components/auth/signForm';
import { UserModel } from '@/src/models/user';
import { authService } from '@/src/services/authService';
import React from 'react';

const SignUp = () => {
  const signUp = async (user: UserModel, password: string) => {
    try {
      await authService.signUp(password, user);
      console.log('you signed up successfully!');
    } catch (error) {
      console.log(error);
    }
  };
  return <SignForm onSubmit={signUp}></SignForm>;
};

export default SignUp;

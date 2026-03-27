import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          title: '',
        }}
      />
    </Stack>
  );
}

import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <Stack screenOptions={{ title: '' }}>
      <Stack.Screen name="addNote" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default _layout;

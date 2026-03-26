import { useGetUserName } from '@/src/hooks/getUserName';
import React from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';

const Welcome = () => {
  const { userName, loading } = useGetUserName();
  return loading ? (
    <ActivityIndicator animating={true} />
  ) : (
    <div>
      <Text>Welcome, {userName}</Text>
    </div>
  );
};

export default Welcome;

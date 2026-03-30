import { useGetUserName } from '@/src/hooks/getUserName';
import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

const Welcome = () => {
  const { userName, loading } = useGetUserName();
  return loading ? (
    <ActivityIndicator animating={true} />
  ) : (
    <View>
      <Text>Welcome, {userName}</Text>
    </View>
  );
};

export default Welcome;

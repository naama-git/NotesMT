import { useGetUserName } from '@/src/hooks/getUserName';
import { theme } from '@/src/styles/theme';
import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

const Welcome = () => {
  const { userName, loading } = useGetUserName();
  return loading ? (
    <ActivityIndicator animating={true} />
  ) : (
    <View>
      <Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>
        Welcome, {userName}
      </Text>
    </View>
  );
};

export default Welcome;

import React from 'react';
import { Appbar, Surface, useTheme } from 'react-native-paper';
import Logout from '@/src/components/auth/logout';
import Welcome from '@/src/components/home/Welcome';
import { View } from 'react-native';

const CustomHeader = () => {
  const theme = useTheme();
  return (
    <Surface
      elevation={2}
      style={{
        margin: 10,
        borderRadius: 25,
        overflow: 'hidden',
        backgroundColor: theme.colors.surface,
      }}
    >
      <Appbar.Header
        style={{
          backgroundColor: 'transparent',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <View style={{ width: 48 }} />

        <Appbar.Content title={<Welcome />} style={{ alignItems: 'center' }} />

        <View style={{ width: 48, alignItems: 'center' }}>
          <Logout />
        </View>
      </Appbar.Header>
    </Surface>
  );
};

export default CustomHeader;

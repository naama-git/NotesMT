import { authService } from '@/src/services/authService';
import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

const logout = () => {
  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.log('Error logout user:', error);
    }
  };
  return (
    <View>
      <IconButton
        icon="logout"
        size={24}
        iconColor="gray"
        onPress={() => logout()}
      />
    </View>
  );
};

export default logout;

import { authService } from '@/src/services/authService';
import { theme } from '@/src/styles/theme';
import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

const Logout = () => {
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
        iconColor={theme.colors.primary}
        onPress={() => logout()}
      />
    </View>
  );
};

export default Logout;

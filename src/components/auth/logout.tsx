import { authService } from '@/src/services/authService';
import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-paper';

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
      <Button onPress={() => logout()}>
        <Icon source="logout" size={20} />
      </Button>
    </View>
  );
};

export default logout;

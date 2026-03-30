import React from 'react';
import { FAB } from 'react-native-paper';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '@/src/styles/theme';

const AddButton = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          margin: 16,
          bottom: 0,
          right: 0,
          backgroundColor: theme.colors.secondary,
        }}
        onPress={() => router.push('/note/addNote')}
      />
    </View>
  );
};

export default AddButton;

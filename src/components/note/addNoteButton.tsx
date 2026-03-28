import React from 'react';
import { FAB } from 'react-native-paper';
import { View } from 'react-native';

const AddButton = () => {
  return (
    <View style={{ flex: 1 }}>
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          margin: 16,
          bottom: 0,
          right: 0,
        }}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default AddButton;

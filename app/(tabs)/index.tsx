import MapView from '@/src/components/note/mapView';
import { useNotes } from '@/src/hooks/getNotes';
import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

const Index = () => {
  const { notes, loading } = useNotes();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <MapView notes={notes} loading={loading} /> */}
      <Text>Map View</Text>
    </View>
  );
};

export default Index;

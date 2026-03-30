import { useNotes } from '@/src/hooks/getNotes';
import React from 'react';
import { View } from 'react-native';
import MapViewScene from '@/src/components/note/mapView';

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
      <MapViewScene notes={notes} loading={loading} />
    </View>
  );
};

export default Index;

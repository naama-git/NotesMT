import { useNotes } from '@/src/hooks/getNotes';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
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
      {notes.length === 0 ||
        (!notes.length && !loading && (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text>You don&apos;t have any notes yet.</Text>
          </View>
        ))}
      <MapViewScene notes={notes} loading={loading} />
    </View>
  );
};

export default Index;

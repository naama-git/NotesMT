import ListView from '@/src/components/note/listView';
import { useNotes } from '@/src/hooks/getNotes';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const List = () => {
  const { notes, loading } = useNotes();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List View</Text>
      {/* <ListView notes={notes} loading={loading}></ListView> */}
    </View>
  );
};

export default List;

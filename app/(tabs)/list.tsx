import ListView from '@/src/components/note/listView';
import { useNotes } from '@/src/hooks/getNotes';
import React from 'react';
import { View } from 'react-native';

const List = () => {
  const { notes, loading } = useNotes();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ListView notes={notes} loading={loading}></ListView>
    </View>
  );
};

export default List;

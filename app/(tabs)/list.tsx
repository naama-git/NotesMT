import ListView from '@/src/components/note/listView';
import { useNotes } from '@/src/hooks/getNotes';
import React from 'react';

const List = () => {
  const { notes, loading } = useNotes();
  return <ListView notes={notes} loading={loading}></ListView>;
};

export default List;

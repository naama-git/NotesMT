import ListView from '@/src/components/note/listView';
import { useAuth } from '@/src/context/AuthContext';
import { Note } from '@/src/models/note';
import { noteService } from '@/src/services/noteService';
import React, { useEffect, useState } from 'react';

const List = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const { user } = useAuth();

  return <ListView></ListView>;
};

export default List;

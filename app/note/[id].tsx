import { Note } from '@/src/models/note';
import { noteService } from '@/src/services/noteService';
import React from 'react';
import { View } from 'react-native';

const EditNote = () => {
  const update = async (note: Note) => {
    try {
      await noteService.updateNote(note.id, note);
    } catch (error) {
      console.log('Error editing note:', error);
    }
  };
  return <View></View>;
};

export default EditNote;

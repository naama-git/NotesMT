import { Note } from '@/src/models/note';
import { noteService } from '@/src/services/noteService';
import React from 'react';
import { View } from 'react-native';

const AddNote = () => {
  const add = async (note: Note) => {
    try {
      await noteService.addNote(note);
    } catch (error) {
      console.log('Error adding note:', error);
    }
  };
  return <View></View>;
};

export default AddNote;

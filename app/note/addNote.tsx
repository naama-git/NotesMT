import { useRouter } from 'expo-router';
import NoteForm from '@/src/components/note/noteForm';
import { useAuth } from '@/src/context/AuthContext';
import { useLocation } from '@/src/hooks/locationHook';
import { Note, NoteInput } from '@/src/models/note';
import { noteService } from '@/src/services/noteService';
import React from 'react';
import { View } from 'react-native';

const AddNote = () => {
  const { location } = useLocation();
  const { user } = useAuth();
  const router = useRouter();

  const createNoteDetails = (note: NoteInput) => {
    const date = new Date().getTime();
    const noteDetails: Note = {
      title: note.title,
      body: note.body,
      createdAt: date,
      location: {
        latitude: location?.coords.latitude || 0,
        longitude: location?.coords.longitude || 0,
      },
      imageUrl: '',
      userId: user?.uid || '',
    };
    return noteDetails;
  };

  const add = async (note: NoteInput) => {
    const newNote = createNoteDetails(note);
    try {
      await noteService.addNote(newNote);
      router.back();
    } catch (error) {
      console.log('Error adding note:', error);
    }
  };
  return (
    <View>
      <NoteForm onSubmit={add} note={null} />
    </View>
  );
};

export default AddNote;

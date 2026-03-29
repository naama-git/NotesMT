import { Note } from '@/src/models/note';
import { noteService } from '@/src/services/noteService';
import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

interface DeleteNoteProps {
  note: Note | null;
}

const DeleteNote: React.FC<DeleteNoteProps> = ({ note }) => {
  const onDelete = async () => {
    if (!note || !note.id) return;
    try {
      await noteService.deleteNote(note.id);
    } catch (error) {
      console.log('Error deleting note:', error);
    }
  };
  return (
    <View>
      {note && <IconButton icon="delete" size={20} onPress={onDelete} />}
    </View>
  );
};

export default DeleteNote;

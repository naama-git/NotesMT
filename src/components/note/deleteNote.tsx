import { Note } from '@/src/models/note';
import { noteService } from '@/src/services/noteService';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles/form.styles';
import { useRouter } from 'expo-router';

interface DeleteNoteProps {
  note: Note | null;
}

const DeleteNote: React.FC<DeleteNoteProps> = ({ note }) => {
  const router = useRouter();
  const onDelete = async () => {
    if (!note || !note.id) return;
    try {
      await noteService.deleteNote(note.id);
      router.back();
    } catch (error) {
      console.log('Error deleting note:', error);
    }
  };
  return (
    <View>
      {note && (
        <Button
          icon="delete"
          mode="contained"
          onPress={() => onDelete()}
          contentStyle={styles.submitBtnContent}
          style={[styles.submitBtn, { marginTop: 8 }]}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
        >
          Delete
        </Button>
      )}
    </View>
  );
};

export default DeleteNote;

import { useLocalSearchParams, useRouter } from 'expo-router';
import { Note, NoteInput } from '@/src/models/note';
import { noteService } from '@/src/services/noteService';
import React, { useEffect } from 'react';
import NoteForm from '@/src/components/note/noteForm';

const EditNote = () => {
  const { id } = useLocalSearchParams();
  const [note, setNote] = React.useState<Note | null>(null);
  const getNote = async () => {
    if (id === undefined) return;
    try {
      const noteId = Array.isArray(id) ? id[0] : id;
      const note = await noteService.getOneNote(noteId);
      console.log('Fetched note:', note);
      setNote(note);
    } catch (error) {
      console.log('Error fetching note:', error);
    }
  };

  useEffect(() => {
    getNote();
  }, []);

  const createNoteDetails = (noteData: NoteInput): Partial<Note> => {
    const noteDetails: Partial<Note> = {
      title: noteData.title,
      body: noteData.body,
      createdAt: noteData.createdAt.getTime(),
    };
    return noteDetails;
  };

  const router = useRouter();

  const update = async (noteData: NoteInput) => {
    const noteDetails = createNoteDetails(noteData);
    if (!note || note.id === undefined) return;
    try {
      await noteService.updateNote(note.id, noteDetails);
      router.back();
    } catch (error) {
      console.log('Error editing note:', error);
    }
  };
  return <NoteForm onSubmit={update} note={note} />;
};

export default EditNote;

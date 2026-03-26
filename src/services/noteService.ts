import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { Note } from './../models/note';
import { db } from './firebaseConfig';

export const noteService = {
  addNote: async (note: Note) => {
    try {
      const docRef = await addDoc(collection(db, 'notes'), note);
      return docRef.id;
    } catch (error) {
      console.error('Error adding document: ', error);
      throw error;
    }
  },

  getNotesByUserId: async (userId: string): Promise<Note[]> => {
    try {
      const q = query(collection(db, 'notes'), where('userId', '==', userId));
      const docs = await getDocs(q);
      return docs.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as Note,
      );
    } catch (error) {
      console.error('Error geting documents: ', error);
      throw error;
    }
  },

  getOneNote: async (noteId: string): Promise<Note | null> => {
    try {
      const noteRef = doc(db, 'notes', noteId);
      const note = await getDoc(noteRef);
      if (note.exists()) {
        return { id: note.id, ...note.data() } as Note;
      } else {
        console.log(`Note with ID ${noteId} was not found`);
        return null;
      }
    } catch (error) {
      console.error('Error geting document: ', error);
      throw error;
    }
  },

  deleteNote: async (noteId: string) => {
    try {
      const noteRef = doc(db, 'notes', noteId);
      await deleteDoc(noteRef);
      console.log('Note deleted successfully');
    } catch (error) {
      console.error('Error deleting document: ', error);
      throw error;
    }
  },

  updateNote: async (noteId: string, noteData: Partial<Note>) => {
    try {
      const noteRef = doc(db, 'notes', noteId);
      await updateDoc(noteRef, noteData);
      console.log('Note updated successfully');
    } catch (error) {
      console.error('Error updating document: ', error);
      throw error;
    }
  },
};

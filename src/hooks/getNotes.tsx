import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Note } from '../models/note';
import { noteService } from '../services/noteService';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setNotes([]);
      return;
    }

    const unsubscribe = noteService.getNotesByUserId(user.uid, (data) => {
      setNotes(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  return { notes, loading };
};

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService';

export const useGetUserName = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        if (user?.uid === undefined) return;
        const currentUser = await authService.getCurrentUser(user?.uid);
        setUserName(
          (currentUser?.firstName ?? '') + (currentUser?.lastName ?? ''),
        );
      } catch (error) {
        console.error('Error loading data ', error);
        setErrorMsg('Error loading user');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [user?.uid]);
  return { userName, errorMsg, loading };
};

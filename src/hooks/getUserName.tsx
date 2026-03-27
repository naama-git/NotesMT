import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService';

export const useGetUserName = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useAuth();

  useEffect(() => {
    if (!user?.uid) {
      setUserName(null);
      return;
    }
    let isMounted = true;
    const loadData = async () => {
      setLoading(true);
      setErrorMsg(null);
      try {
        const currentUser = await authService.getCurrentUser(user.uid);

        if (isMounted) {
          if (currentUser) {
            console.log(currentUser);
            const fullName =
              `${currentUser.firstName ?? ''} ${currentUser.lastName ?? ''}`.trim();
            setUserName(fullName || 'User');
          } else {
            setUserName('Unknown User');
          }
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error loading data ', error);
          setErrorMsg('Error loading user');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [user?.uid]);
  return { userName, errorMsg, loading };
};

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebaseConfig';
import { UserModel } from '../models/user';

export const authService = {
  signUp: async (password: string, userData: UserModel) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        password,
      );
      const user = userCredential.user;
      const userProfile = {
        ...userData,
        createdAt: Date.now(),
      };
      await setDoc(doc(db, 'users', user.uid), userProfile);
    } catch (error) {
      console.error('Error in sign up: ', error);
      throw error;
    }
  },
  login: async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user.user;
    } catch (error: any) {
      console.error('Error in Login:', error.message);
      throw error;
    }
  },
  logout: async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error('Error in Logout:', error.message);
      throw error;
    }
  },
  getCurrentUser: async (userId: string): Promise<UserModel | null> => {
    try {
      const docRef = doc(db, 'users', userId);
      const user = await getDoc(docRef);
      if (user.exists()) {
        return user.data() as UserModel;
      }
      return null;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  },
};

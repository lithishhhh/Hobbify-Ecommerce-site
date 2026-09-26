import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config/firebase';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [firebaseUid, setFirebaseUid] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  const syncUser = async (firebaseUser) => {
    const idToken = await firebaseUser.getIdToken();
    const response = await api.post('/auth/sync', {}, {
      headers: { Authorization: `Bearer ${idToken}` },
    });
    setUser(response.data);
    setFirebaseUid(firebaseUser.uid);
    setToken(idToken);
  };

  useEffect(() => onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      setUser(null);
      setFirebaseUid('');
      setToken('');
      setLoading(false);
      return;
    }

    try {
      await syncUser(firebaseUser);
    } catch (error) {
      await signOut(auth);
      setUser(null);
      setFirebaseUid('');
      setToken('');
    } finally {
      setLoading(false);
    }
  }), []);

  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    await syncUser(result.user);
    setLoading(false);
    return result;
  };

  const register = async (name, email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });
    await result.user.getIdToken(true);
    return result;
  };

  const logout = () => signOut(auth);

  const value = useMemo(() => ({ user, firebaseUid, token, loading, login, register, logout }), [user, firebaseUid, token, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

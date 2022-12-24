import { db, app } from '../firebase/config';

import { useState, useEffect } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  User,
  Auth,
  AuthError,
} from 'firebase/auth';

export interface CreateUser {
  displayName: string;
  email: string;
  password: string;
}

export interface AuthenticationReturn {
  auth: Auth;
  createUser: (data: CreateUser) => Promise<User | undefined>;
  error: string;
  loading: boolean;
}

type a = AuthError;

const useAuthentication = (): AuthenticationReturn => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [cancelled, setCancelled] = useState<boolean>(false);

  const auth = getAuth(app);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const createUser = async (data: CreateUser): Promise<User | undefined> => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      setLoading(false);
      return user;
    } catch (error) {
      if (error instanceof Error) {
        let systemErrorMessage = '';

        if (error.message.includes('Password')) {
          systemErrorMessage = 'A senha deve conter no mínimo 6 caracteres.';
        } else if (error.message.includes('email-already')) {
          systemErrorMessage = 'E-mail já cadastrado.';
        } else {
          systemErrorMessage = 'Ocorreu algum erro, tente novamente.';
        }

        setError(systemErrorMessage);
        setLoading(false);
      }
    }
  };

  return {
    auth,
    createUser,
    error,
    loading,
  };
};

export default useAuthentication;
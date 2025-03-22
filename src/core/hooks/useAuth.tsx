import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAppSelector } from '../../store';

export function useAuth() {
  const navigate = useNavigate();
  const authState = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (authState.user) navigate('/');
  }, [authState, navigate]);

  return {
    error: authState.error,
    loading: authState.loading,
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
  };
}

import { useContext } from 'react';
import { UserContext, UserContextProps } from './userContext';

export const useUser = () => {
  const context = useContext<UserContextProps | undefined>(
    UserContext
  );
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

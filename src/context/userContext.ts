import { createContext } from 'react';

export interface UserContextProps {
  userId: number | null;
  userData: {
    user_id: string;
    score_points: number;
  } | null;
  updateScore: (newScore: number) => void;
  error: string | null;
}

export const UserContext = createContext<
  UserContextProps | undefined
>(undefined);

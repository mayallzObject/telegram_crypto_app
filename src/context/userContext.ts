import { createContext } from 'react';

export interface UserContextProps {
  userId: number | null;
  userData: {
    user_id: string;
    score_points: number;
  } | null;
  setUserData: React.Dispatch<
    React.SetStateAction<{
      user_id: string;
      score_points: number;
    } | null>
  >;
  error: string | null;
}

export const UserContext = createContext<
  UserContextProps | undefined
>(undefined);

import { doc, updateDoc } from 'firebase/firestore';
import { useCallback } from 'react';
import { firestore } from '../../firebaseConfig';

import { useUser } from './useUser';

const useUserData = () => {
  const { userId, userData, setUserData, error } = useUser();

  const updateScore = useCallback(
    async (newScore: number) => {
      if (userData && userId !== null) {
        try {
          const userDocRef = doc(
            firestore,
            'users_telegram',
            userId.toString()
          );
          await updateDoc(userDocRef, { score_points: newScore });
          setUserData((prevData) =>
            prevData ? { ...prevData, score_points: newScore } : null
          );
        } catch (err) {
          console.error('Error updating score:', err);
          throw new Error('Error updating score');
        }
      }
    },
    [userId, userData, setUserData]
  );

  return { userId, userData, updateScore, error };
};

export default useUserData;

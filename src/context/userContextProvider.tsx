import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { firestore } from '../../firebaseConfig'; // Adjust the import path as necessary
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { UserContext } from './userContext';

export const UserProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [userData, setUserData] = useState<{
    user_id: string;
    score_points: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();

    const user = WebApp.initDataUnsafe.user;
    const userId = user ? user.id : null;
    setUserId(userId);

    const fetchUser = async () => {
      if (userId !== null) {
        try {
          const userDocRef = doc(
            firestore,
            'users_telegram',
            userId.toString()
          );
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserData(
              userDoc.data() as {
                user_id: string;
                score_points: number;
              }
            );
            console.log('User Data:', userDoc.data());
          } else {
            setError('User not found');
            console.log('User not found');
          }
        } catch (err) {
          setError('Error fetching user data');
          console.error('Error fetching user data:', err);
        }
      }
    };

    fetchUser();
  }, []);

  const updateScore = async (newScore: number) => {
    if (userId !== null) {
      try {
        const userDocRef = doc(
          firestore,
          'users_telegram',
          userId.toString()
        );
        await updateDoc(userDocRef, {
          score_points: newScore,
        });
        setUserData((prevData) =>
          prevData ? { ...prevData, score_points: newScore } : null
        );
      } catch (err) {
        setError('Error updating score');
        console.error('Error updating score:', err);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{ userId, userData, updateScore, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

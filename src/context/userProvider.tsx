import WebApp from '@twa-dev/sdk';
import { doc, getDoc } from 'firebase/firestore';
import { ReactNode, useState, useEffect } from 'react';
import { firestore } from '../../firebaseConfig';
import { UserContext } from './userContext';

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

  return (
    <UserContext.Provider
      value={{ userId, userData, setUserData, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

import React, { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig'; // Adjust the import path as necessary
import { doc, getDoc } from 'firebase/firestore';

const App: React.FC<{ userId: number | null }> = ({ userId }) => {
  const [userData, setUserData] = useState<{
    user_id: string;
    score_points: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId !== null) {
        try {
          const userDocRef = doc(
            firestore,
            'users',
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
  }, [userId]);

  return (
    <div>
      <h1>User Data {userId}</h1>
      {error && <p>{error}</p>}
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;

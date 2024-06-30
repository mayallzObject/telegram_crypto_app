import React, { useEffect, useState } from 'react';
import FirebaseConfigTest from './components/testFirebase';
import { DocumentData } from 'firebase/firestore';
import { fetchDocumentById } from './firestore/users.store';

const App: React.FC<{ userId: number | null }> = ({ userId }) => {
  const [user, setUser] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      console.log(userId);
      try {
        const userData = await fetchDocumentById(
          'users_telegram',
          String(userId)
        );
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      getUserData();
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data found</div>;
  }

  return (
    <div>
      <FirebaseConfigTest />
    </div>
  );
};

export default App;

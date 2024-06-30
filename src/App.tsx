// src/App.tsx
import React, { useEffect, useState } from 'react';
import { fetchDocumentById } from './firestore/users.store';
import { DocumentData } from 'firebase/firestore';

const App: React.FC<{ userId: number | null }> = ({ userId }) => {
  const [user, setUser] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      try {
        const userData = await fetchDocumentById(
          'users',
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
      <h1>User Data</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default App;

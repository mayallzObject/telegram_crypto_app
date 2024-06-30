import React, { useCallback } from 'react';
import useUserData from '../context/useAndUpdateUser';

const HomePage: React.FC = () => {
  const { userId, userData, updateScore, error } = useUserData();

  const handleScoreUpdate = useCallback(() => {
    updateScore(10); // Increment score by 10
  }, [updateScore]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}
    >
      <h1>User Data {userId}</h1>
      {error && <p>{error}</p>}
      {userData ? (
        <>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
          <button onClick={handleScoreUpdate}>Update Score</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;

HomePage.displayName = 'Home';

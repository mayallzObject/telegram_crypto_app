import React, { useState, useEffect, useCallback } from 'react';
import ProgressBar from '../components/progressBar/progressBar';
import useUserData from '../context/useAndUpdateUser';

const HomePage: React.FC = () => {
  const { userId, userData, updateScore, error } = useUserData();
  const [points, setPoints] = useState(50); // Start with 1000 points

  useEffect(() => {
    if (userData) {
      setPoints(userData.score_points);
    }
  }, [userData]);

  const handleScoreUpdate = useCallback(async () => {
    if (userData) {
      const newScore = userData.score_points + 10;
      await updateScore(newScore);
      setPoints(newScore);
      resetTimer();
    }
  }, [userData, updateScore]);

  const resetTimer = () => {
    setPoints((prevPoints) =>
      prevPoints + 5 > 1000 ? 1000 : prevPoints + 5
    ); // Add 5 points back, up to a max of 1000
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) => {
        if (prevPoints === 0) return 0;
        const newPoints = prevPoints - 5;
        updateScore(newPoints);
        return newPoints < 0 ? 0 : newPoints;
      });
    }, 1000); // Decrease points every second

    return () => clearInterval(interval);
  }, [updateScore]);

  return (
    <div>
      <ProgressBar points={points} onResetTimer={resetTimer} />
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

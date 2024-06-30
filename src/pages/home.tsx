import React, { useState, useEffect, useCallback } from 'react';
import ProgressBar from '../components/progressBar/progressBar';
import useUserData from '../context/useAndUpdateUser';

const HomePage: React.FC = () => {
  const { userId, userData, updateScore, error } = useUserData();
  const [progress, setProgress] = useState(50); // Example initial progress
  const [points, setPoints] = useState(0);

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
    setProgress(100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 1;
        return newProgress < 0 ? 0 : newProgress;
      });
    }, 100); // Update progress every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ProgressBar
        progress={progress}
        points={points}
        onResetTimer={resetTimer}
      />
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

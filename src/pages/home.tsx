import useUserData from '../context/useAndUpdateUser';

const HomePage = () => {
  const { userId, userData, updateScore, error } = useUserData();

  // Example function to handle some user action that updates the score
  const handleScoreUpdate = () => {
    if (userData) {
      const newScore = userData.score_points + 10; // For example, increment score by 10
      updateScore(newScore);
    }
  };

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

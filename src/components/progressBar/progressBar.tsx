import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  points: number;
  onResetTimer: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  points,
  onResetTimer,
}) => {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRed(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [points]);

  const handlePress = () => {
    onResetTimer();
    setIsRed(false);
  };

  const progressPercentage = (points / 1000) * 100;

  return (
    <div className="progress-container" onClick={handlePress}>
      <div
        className={`progress-bar ${isRed ? 'red' : ''}`}
        style={{ width: `${progressPercentage}%` }}
      >
        {points} / 1000
      </div>
      <div className="points">Points: {points}</div>
    </div>
  );
};

export default ProgressBar;

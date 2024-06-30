import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  progress: number;
  points: number;
  onResetTimer: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  points,
  onResetTimer,
}) => {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRed(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [progress]);

  const handlePress = () => {
    onResetTimer();
    setIsRed(false);
  };

  return (
    <div className="progress-container" onClick={handlePress}>
      <div
        className={`progress-bar ${isRed ? 'red' : ''}`}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
      <div className="points">Points: {points}</div>
    </div>
  );
};

export default ProgressBar;

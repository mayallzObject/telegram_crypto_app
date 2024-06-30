import React, { useState, useEffect } from 'react';
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
  }, [isRed]);

  const handlePress = () => {
    onResetTimer();
    setIsRed(false);
  };

  return (
    <div className="progress-container">
      <div
        className={`progress-bar ${isRed ? 'red' : ''}`}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
      <div className="points" onClick={handlePress}>
        Points: {points}
      </div>
    </div>
  );
};

export default ProgressBar;

import React, { useState } from 'react';

function DurationExercise({ name }) {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timerInterval;

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setIsRunning(false);
    setTimer(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Duration: {formatTime(timer)}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}

export default DurationExercise;

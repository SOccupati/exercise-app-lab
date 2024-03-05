import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelection = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      <div className="exercise-menu">
        <button onClick={() => handleExerciseSelection('repetition')}>Repetition Exercise</button>
        <button onClick={() => handleExerciseSelection('duration')}>Duration Exercise</button>
      </div>
      <div className="exercise-display">
        {selectedExercise === 'repetition' && <RepetitionExercise name="Repetition Exercise" />}
        {selectedExercise === 'duration' && <DurationExercise name="Duration Exercise" />}
      </div>
    </div>
  );
}

export default App;

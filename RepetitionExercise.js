import React, { useState } from 'react';

function RepetitionExercise({ name }) {
  const [repetitions, setRepetitions] = useState(0);

  const incrementRepetitions = () => {
    setRepetitions(repetitions + 1);
  };

  const resetRepetitions = () => {
    setRepetitions(0);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Repetitions: {repetitions}</p>
      <button onClick={incrementRepetitions}>Increment Repetitions</button>
      <button onClick={resetRepetitions}>Reset Repetitions</button>
    </div>
  );
}

export default RepetitionExercise;

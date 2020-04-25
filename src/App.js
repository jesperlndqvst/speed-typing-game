import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
    calculateWords(text);
  };

  const calculateWords = (text) => {
    const wordsArray = text
      .trim()
      .split(' ')
      .filter((word) => word !== '');
    setWordCount(wordsArray.length);
  };

  useEffect(() => {
    if (timeRemaining <= 0) {
      setIsGameStarted(false)
      return;
    };

    setTimeout(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);
  }, [timeRemaining]);

  const startGame = () => {
    setIsGameStarted(true);
    setTimeRemaining(STARTING_TIME);
  };

  return (
    <div className='App'>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <p>Word Count: {wordCount}</p>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default App;

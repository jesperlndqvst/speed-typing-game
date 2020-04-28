import React, { useState, useEffect } from 'react';
import './App.css';
import client from './owlbot';

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [correctWords, setCorrectWords] = useState([]);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

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
    return wordsArray;
  };

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText('');
  };

  const endGame = () => {
    setTimeRemaining(false);
    const words = calculateWords(text);
    setWordCount(words);
    setCorrectWords(calcCorrectWords(words));
  };

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, isTimeRunning]);

  const calcCorrectWords = (words) => {
    let correctWordsArray = [];
    words.forEach((word) => {
      client.define(word).then((result) => {
        if (result) {
          correctWordsArray.push(word);
        }
      });
    });
    return correctWordsArray;
  };

  return (
    <div className='App'>
      <textarea 
      onChange={handleChange} 
      value={text}
      disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <p>Word Count: {wordCount.length}</p>
      <p>Correct word count: {correctWords.length}</p>
      <button
       onClick={startGame}
       disabled={isTimeRunning}
       >
         Start Game
         </button>
    </div>
  );
}

export default App;

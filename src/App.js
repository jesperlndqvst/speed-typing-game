import React, { useState, useEffect } from 'react';
import './App.css';
import client from './owlbot';

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [correctWords, setCorrectWords] = useState([]);

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
      calcCorrectWords(words);
      console.log(correctWords.length);
      return;
    }

    setTimeout(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);
  }, [timeRemaining]);

  const startGame = () => {
    setTimeRemaining(STARTING_TIME);
  };

  const words = ['dog', 'cat'];

  const calcCorrectWords = (words) => {
    let correctWordsArray = [];
    words.forEach((word) => {
      client.define(word).then((result) => {
        if (result) {
          correctWordsArray.push(word);
        }
      });
    });
    setCorrectWords(correctWordsArray);
  };

  return (
    <div className='App'>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <p>Word Count: {wordCount}</p>
      <button onClick={startGame}>Start Game</button>
      <p>{correctWords}</p>
    </div>
  );
}

export default App;

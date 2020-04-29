import React, { useState, useEffect } from 'react';
import './App.css';
import client from './owlbot';
import ScoreText from './components/ScoreText';
import Button from './components/Button';
import ResultCard from './components/ResultCard';

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
    calcCorrectWords(words);
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

  const calcCorrectWords = async (words) => {
    for (let i = 0; i < words.length; i++) {
      try {
        const response = await client.define(words[i]);
        setCorrectWords((correctWords) => [...correctWords, response]);
      } catch (error) {
        console.log('Invalid word');
      }
    }
  };

  const resultComponents = correctWords.map((item) => (
    <ResultCard
      key={item.definitions[0].definition}
      word={item.word}
      pronunciation={item.pronunciation}
      type={item.definitions[0].type}
      definition={item.definitions[0].definition}
      example={item.definitions[0].example}
      image={item.definitions[0].image_url}
    />
  ));

  return (
    <div className='App'>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <ScoreText text='Word Count: ' value={wordCount.length} />
      <ScoreText text='Correct Word Count: ' value={correctWords.length} />
      <Button
        text='Start Game!'
        handleClick={startGame}
        disabled={isTimeRunning}
      />
      {resultComponents}
    </div>
  );
}

export default App;

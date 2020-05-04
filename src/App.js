import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import client from './owlbot';
import Header from './components/Header';
import InputField from './components/InputField';
import ControlPanel from './components/ControlPanel';
import ResultCard from './components/ResultCard';

function App() {
  const STARTING_TIME = 15;

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [correctWords, setCorrectWords] = useState([]);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const inputRef = useRef(null);

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
    setWordCount(0);
    setCorrectWords([]);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  useEffect(() => {
    if (isTimeRunning === false) {
      const words = calculateWords(text);
      setWordCount(words);
      calcCorrectWords(words);
    }
  }, [isTimeRunning, text]);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
    }
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
      <Header text='Speed Type Test Explained' />
      <InputField
        ref={inputRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <ControlPanel
        timeRemaining={timeRemaining}
        wordCount={wordCount.length}
        correctWords={correctWords.length}
        startGame={startGame}
        isTimeRunning={isTimeRunning}
      />
      {resultComponents}
    </div>
  );
}

export default App;

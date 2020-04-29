import React from 'react';

const ResultCard = (props) => {
  return (
    <div>
      <p>{props.word}</p>
      <p>{props.pronunciation}</p>
      <p>{props.type}</p>
      <p>{props.definition}</p>
      <p>{props.example}</p>
      <img src={props.image} alt={props.word} />
    </div>
  );
};

export default ResultCard;

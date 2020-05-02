import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResultCardStyled = styled.div`
  background-color: light-grey;
  text-align: left;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 20px;

  h4 {
    font-size: 24px;
  }

  .top,
  .bottom {
    padding: 10px 0;
  }

  .bottom {
    border-top: 1px solid black;
    display: flex;
    height: 150px;
  }

  .pronunciation {
    color: grey;
  }

  .type {
    font-style: italic;
  }

  img {
    min-width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 40px;
  }
`;

const ResultCard = (props) => {

  return (
    <ResultCardStyled>
      <div className='top'>
        <h4 className='word'>{props.word}</h4>
        <p className='pronunciation'>{props.pronunciation}</p>
      </div>
      <div className='bottom'>
        <div>
          <p className='type'>{props.type}</p>
          <p className='definition'>{props.definition}</p>
        </div>
        {props.image && <img src={props.image} alt={props.word} />}
      </div>
    </ResultCardStyled>
  );
};

ResultCard.propTypes = {
  children: PropTypes.string,
};

export default ResultCard;

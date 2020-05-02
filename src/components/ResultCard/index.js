import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResultCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-light-grey);
  padding: 20px;
  margin: 20px auto;

  h4 {
    font-size: 24px;
  }

  .left,
  .right {
    padding: 10px 0;
  }

  .left {
    width: 70%;
  }

  .pronunciation {
    color: grey;
  }

  .type {
    font-style: italic;
  }

  img {
    margin: auto;
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
      <div className='left'>
        <h4 className='word'>{props.word}</h4>
        <p className='pronunciation'>{props.pronunciation}</p>
        <p className='type'>{props.type}</p>
        <p className='definition'>{props.definition}</p>
      </div>
      <div className='right'>
        {props.image && <img src={props.image} alt={props.word} />}
      </div>
    </ResultCardStyled>
  );
};

ResultCard.propTypes = {
  children: PropTypes.string,
};

export default ResultCard;

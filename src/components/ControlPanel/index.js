import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TimeRemaining from '../TimeRemaining';
import ScoreText from '../ScoreText';
import Button from '../Button';


const ControlPanelStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  padding: 20px 0;
`;

const ControlPanel = (props) => {
  return (
    <ControlPanelStyled>
      <div>
        <TimeRemaining text='Time Remaining: ' value={props.timeRemaining} />
        <ScoreText text='Word Count: ' value={props.wordCount} />
        <ScoreText text='Correct Word Count: ' value={props.correctWords} />
      </div>
      <Button
        text='Start!'
        handleClick={props.startGame}
        disabled={props.isTimeRunning}
      />
    </ControlPanelStyled>
  );
};

ControlPanel.propTypes = {
    timeRemaining: PropTypes.number,
    wordCount: PropTypes.number,
    correctWords: PropTypes.number,
    startGame: PropTypes.func,
    isTimeRunning: PropTypes.bool
};

export default ControlPanel;

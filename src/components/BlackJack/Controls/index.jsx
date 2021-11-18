import React, { useState, useEffect } from 'react';
import './styles.css';

const Controls = ({ balance, gameState, buttonState, betEvent, hitEvent, standEvent, resetEvent }) => {
  const [amount, setAmount] = useState(10);
  const [inputStyle, setInputStyle] = useState("input");

  useEffect(() => {
    validation();
  }, [amount, balance]);

  const validation = () => {
    if (amount > balance) {
      setInputStyle("inputError");
      return false;
    }
    if (amount < 0.01) {
      setInputStyle("inputError");
      return false;
    }
    setInputStyle("input");
    return true;
  }

  const amountChange = (e) => {
    setAmount(e.target.value);
  }

  const onBetClick = () => {
    if (validation()) {
      betEvent(Math.round(amount * 100) / 100);
    }
  }

  const getControls = () => {
    if (gameState === 0) {
      return (
        <div className="controlsContainer">
          <div className="betContainer">
            <h4>Amount:</h4>
            <input autoFocus type='number' value={amount} onChange={amountChange} className={inputStyle} />
          </div>
          <button onClick={() => onBetClick()} className="button">Bet</button>
        </div>
      );
    }
    else {
      return (
        <div className="controlsContainer">
          <button onClick={() => hitEvent()} disabled={buttonState.hitDisabled} className="button">Hit</button>
          <button onClick={() => standEvent()} disabled={buttonState.standDisabled} className="button">Stand</button>
          <button onClick={() => resetEvent()} disabled={buttonState.resetDisabled} className="button">Reset</button>
        </div>
      );
    }
  }

  return (
    <>
      {getControls()}
    </>
  );
}

export default Controls;
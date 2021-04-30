import React, { useState } from 'react';
import './NumberPad.css';

interface props {
  onConfirmAction: (number: number) => void;
  onCancelAction: () => void;
  onInputChangeAction: (number: number) => void;
}
const NumberPad = ({
  onConfirmAction,
  onCancelAction,
  onInputChangeAction,
}: props): JSX.Element => {
  const [code, setCode] = useState('');

  const changeFood = (number: string) => {
    onInputChangeAction(+number);
    setCode(number);
  };

  const numbers = Array.from({ length: 9 }).map((i, index) => index + 1);
  numbers.push(0);
  return (
    <div className="numberPad">
      <div className="input-space">
        <input
          className="food-input"
          type="text"
          value={code}
          onChange={(event) => {
            changeFood(event.target.value);
          }}
        />
      </div>
      <div className="pad-container">
        {numbers.map((number) => (
          <button
            key={number}
            className="number-box"
            onClick={() => changeFood(code + '' + number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="buttons-container">
        <button
          className="button green"
          type="button"
          onClick={() => {
            setCode('');
            onConfirmAction(+code);
          }}
        >
          Confirm
        </button>
        <button
          className="button red"
          type="button"
          onClick={() => {
            setCode('');
            onCancelAction();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NumberPad;

import React, { useEffect, useState } from 'react';
import { FOODARRAY } from '../../app_constants/constants';
import Chronometer from '../../components/chronometer/Chronometer';
import Food, { IFood } from '../../components/food/Food';
import FoodQueue from '../../components/foodQueue/FoodQueue';
import NumberPad from '../../components/numberPad/NumberPad';
import './VendingMachine.css';

const VendingMachine = (): JSX.Element => {
  const [queueState, setQueueState] = useState<IFood[]>([]);
  const [selectedFood, setSelectedFood] = useState<IFood>();
  const [currentlyProcessing, setCurrentlyProcessing] = useState<IFood>();

  const changeChronState = () => {
    setCurrentlyProcessing(undefined);
  };

  const setFood = (number: number) => {
    const selected = FOODARRAY.find((food) => food.id === number);
    if (selected) {
      setSelectedFood(selected);
    } else {
      setSelectedFood(undefined);
    }
  };

  const addToQueue = () => {
    if (selectedFood) {
      setQueueState([...queueState, { ...selectedFood }]);
      setSelectedFood(undefined);
    }
  };

  useEffect(() => {
    if (queueState && queueState.length && !currentlyProcessing) {
      setCurrentlyProcessing(queueState[0]);
      setQueueState([...queueState.slice(1, queueState.length)]);
    }
  }, [queueState, currentlyProcessing]);

  return (
    <>
      <div className="section1">
        <div className="vending-machine-container">
          {FOODARRAY.map((food) => (
            <Food
              key={food.id}
              food={food}
              onClickAction={(number) => {
                setFood(number);
              }}
            />
          ))}
        </div>
      </div>
      <div className="section2">
        {selectedFood ? (
          <div className="selected-food-panel">
            <div className="selected-food-picture">
              <img src={selectedFood.picture} alt="" />
            </div>
            <p>{selectedFood.name}</p>
          </div>
        ) : (
          <div className="selected-food-panel">
            <div className="selected-food-picture"></div>
          </div>
        )}
        <NumberPad
          onCancelAction={() => setSelectedFood(undefined)}
          onInputChangeAction={(number) => setFood(number)}
          onConfirmAction={() => addToQueue()}
        />
      </div>

      <div className="section3">
        <h1 className="section-header">Info</h1>
        {queueState.length ? (
          <>
            {' '}
            <h1 className="section-header">Queued Foods</h1>
            <FoodQueue queue={queueState} />
          </>
        ) : (
          <></>
        )}

        {currentlyProcessing ? (
          <>
            <h1 className="section-header">Currently processed</h1>

            <ul className="queue-list">
              <li
                className="list-element"
                style={{ backgroundColor: '#FAADAD' }}
              >
                <p>{currentlyProcessing.name}</p>
                <Chronometer
                  food={currentlyProcessing}
                  onTimeUp={() => changeChronState()}
                  endTime={
                    new Date(
                      new Date().getTime() +
                        currentlyProcessing.cookMins * 60 * 1000
                    )
                  }
                />
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default VendingMachine;

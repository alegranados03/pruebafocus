import React from 'react';
import { IFood } from '../food/Food';
import './FoodQueue.css';

interface IProps {
  queue: IFood[];
}
const FoodQueue = ({ queue }: IProps): JSX.Element => {
  const reversed = [...queue].reverse();
  const total = reversed.map((el) => el.cookMins).reduce((acc, el) => acc + el);

  return (
    <>
      <p className="queue-total">
        Total time to dispatch queue:{' '}
        {total < 1 ? `${total} seconds.` : `${total} minutes`}
      </p>
      {queue.length ? (
        <ul className="queue-list">
          {reversed.map((food) => {
            return (
              <li
                className="list-element"
                key={
                  new Date().getTime() +
                  Math.floor(Math.random() * 10000000) +
                  food.id
                }
              >
                <p>{food.name}</p>
                <p>
                  Will be ready in:{' '}
                  {food.cookMins < 1
                    ? `${food.cookMins * 60} secs.`
                    : `${food.cookMins} min`}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default FoodQueue;

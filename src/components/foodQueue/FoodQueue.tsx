import React from 'react';
import { IFood } from '../food/Food';
import './FoodQueue.css';

interface IProps {
  queue: IFood[];
}
const FoodQueue = ({ queue }: IProps): JSX.Element => {
  const reversed = [...queue].reverse();

  return (
    <>
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
                {food.name}
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

import React, { useEffect } from 'react';
import { IFood } from '../food/Food';
import './Chronometer.css';

interface IProps {
  onTimeUp: () => void;
  food: IFood;
  endTime: Date;
}
const Chronometer = ({ onTimeUp, food, endTime }: IProps): JSX.Element => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (endTime.getTime() - new Date().getTime() <= 0) {
        onTimeUp();
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  return <>Chron Works!</>;
};

export default Chronometer;

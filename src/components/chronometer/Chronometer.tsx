import { count } from 'node:console';
import React, { useEffect, useRef } from 'react';
import { IFood } from '../food/Food';
import './Chronometer.css';

interface IProps {
  onTimeUp: () => void;
  food: IFood;
  endTime: Date;
}
const Chronometer = ({ onTimeUp, endTime }: IProps): JSX.Element => {
  const divx = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const difference = endTime.getTime() - new Date().getTime();
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      if (divx.current) {
        let minstring = '';
        let secstring = '';
        minutes < 10 ? (minstring = `0${minutes}`) : (minstring = `${minutes}`);
        seconds < 10 ? (secstring =  `0${seconds}`) : (secstring = `${seconds}`);
        divx.current.innerHTML = `${minstring}:${secstring}`;
      }
      if (difference <= 0) {
        onTimeUp();
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  return <div>Will be ready in: <span ref={divx}></span></div>;
};

export default Chronometer;

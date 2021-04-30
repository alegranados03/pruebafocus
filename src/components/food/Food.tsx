import React from 'react';
import './Food.css';

export interface IFood {
  picture: string;
  name: string;
  cookMins: number;
  id: number;
}
interface IProps {
  food: IFood;
  onClickAction: (id: number) => void;
}

const Food = ({ food, onClickAction }: IProps): JSX.Element => {
  return (
    <div className="food-box" onClick={() => onClickAction(food.id)}>
      <div className="food-picture">
        <img src={food.picture} alt="" />
      </div>
      <div className="food-details">
        <p>
          <strong>{food.name}</strong>
        </p>
        <p>Preparation time: {food.cookMins} min</p>
        <p>Food Code: {food.id}</p>
      </div>
    </div>
  );
};

export default Food;

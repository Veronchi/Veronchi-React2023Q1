import { FC } from 'react';
import { Character } from '@/utils/interfaces';
import './style.scss';

interface CardProps {
  character: Character;
  handleClick: (id: number) => void;
}

export const Card: FC<CardProps> = ({ character, handleClick }) => {
  const { id, name, image } = character;

  return (
    <li className="card" onClick={() => handleClick(id)} data-testid="card">
      <img className="card__img" src={image} alt="character image" />
      <h3 className="card__title">{name}</h3>
    </li>
  );
};

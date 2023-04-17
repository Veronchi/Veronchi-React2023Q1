import { FC } from 'react';
import { Card } from '../index';
import { Character } from '@/utils/interfaces';
import './style.scss';

interface CardListProps {
  data: Character[] | undefined;
  handleModal: (id: number) => void;
}

export const CardList: FC<CardListProps> = ({ data, handleModal }) => {
  return (
    <ul className="products" data-testid="products-list">
      {data &&
        data.map((item) => (
          <Card key={item.id} character={{ ...item }} handleClick={() => handleModal(item.id)} />
        ))}
    </ul>
  );
};

import { FC } from 'react';
import { Card } from '../index';
import { products } from '@/utils/mockData';
import './style.scss';

export const CardList: FC = () => {
  return (
    <ul className="products" data-testid="products-list">
      {products.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </ul>
  );
};

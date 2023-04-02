import { FC } from 'react';
import { FormListProps } from '@/utils/interfaces';
import { FormItem } from '..';
import './style.scss';

export const FormList: FC<FormListProps> = ({ items }) => {
  return (
    <ul className="form-list">
      {items.map((item) => (
        <FormItem key={`${item.category}:${item.title}`} {...item} />
      ))}
    </ul>
  );
};

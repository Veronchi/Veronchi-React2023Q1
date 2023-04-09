import { FormItemProps } from './interfaces';
import item1 from '../assets/img/vero-moda-sweater.png';

export const mockFormItem = (): FormItemProps => {
  return {
    title: 'HnM',
    description: 'Wide-leg TRF Jeans',
    price: '1234',
    category: 'Jeans',
    collection: '2023-03-24',
    radio: 'yes',
    stock: 'yes',
    image: item1,
  };
};

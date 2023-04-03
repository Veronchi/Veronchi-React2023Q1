import { FC } from 'react';
import { FormItemProps } from '@/utils/interfaces';
import './style.scss';

export const FormItem: FC<FormItemProps> = ({
  title,
  description,
  price,
  category,
  radio,
  collection,
  stock,
  image,
}) => {
  const getYear = (): number => {
    const date = new Date(collection);

    return date.getFullYear();
  };

  const getSeason = (): string => {
    const month = new Date(collection).getMonth();

    if (month >= 2 && month <= 4) {
      return 'Spring';
    } else if (month >= 5 && month <= 7) {
      return 'Summer';
    } else if (month >= 8 && month <= 10) {
      return 'Autumn';
    } else {
      return 'Winter';
    }
  };

  return (
    <li className="product" data-testid="form-item">
      <img src={image} className="product__img product__img_form" alt="item image" />
      <div className="info-wrapper">
        <span className={radio.includes('yes') ? 'product__like fill' : 'product__like'}></span>
      </div>
      <h3 className="product__title">{title}</h3>
      <p className="product__desc">{description}</p>
      <div className="price-wrapper">
        <span className="product__delivery">
          {stock.includes('yes') ? 'We can deliver' : 'Pre-order'}
        </span>
        <span className="product__new-price">{price}$</span>
      </div>

      <p className="category">Category: {category}</p>
      <p className="collection">{`Collection: ${getSeason()} ${getYear()}`}</p>
    </li>
  );
};

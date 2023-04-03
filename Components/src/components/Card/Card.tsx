import { FC, useState } from 'react';
import { Product } from '@/utils/interfaces';
import './style.scss';

export const Card: FC<Product> = ({
  title,
  img,
  rating,
  description,
  oldPrice,
  newPrice,
  isLiked,
}) => {
  const [isLike, setIsLike] = useState(isLiked);

  const handleClick = () => {
    setIsLike(!isLike);
  };

  return (
    <li className="product" role="product">
      <img className="product__img" src={img} alt="product image" />
      <div className="info-wrapper">
        <span className="product__rating">{rating}</span>
        <button
          className={isLike ? 'product__like fill' : 'product__like'}
          data-testid="like"
          type="button"
          onClick={handleClick}
        />
      </div>
      <h3 className="product__title">{title}</h3>
      <p className="product__desc">{description}</p>
      <div className="price-wrapper">
        {oldPrice && <span className="product__old-price">{oldPrice}$</span>}
        <span className="product__new-price">{newPrice}$</span>
      </div>
      <button className="product__btn" type="button">
        Add to cart
      </button>
    </li>
  );
};

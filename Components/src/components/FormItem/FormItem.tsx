import { Component } from 'react';
import { FormItemProps } from '@/utils/interfaces';
import './style.scss';

export class FormItem extends Component<FormItemProps> {
  year: number;
  season: string;

  constructor(props: FormItemProps) {
    super(props);
    this.year = this.getYear(this.props.collection);
    this.season = this.getSeason(this.props.collection);
  }

  getYear = (data: string): number => {
    const date = new Date(data);

    return date.getFullYear();
  };

  getSeason = (data: string): string => {
    const month = new Date(data).getMonth();

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

  render() {
    const { title, description, price, category, favorite, stock, img } = this.props;
    return (
      <li className="product" data-testid="form-item">
        <img src={img} className="product__img product__img_form" alt="item image" />
        <div className="info-wrapper">
          <span
            className={favorite.includes('yes') ? 'product__like fill' : 'product__like'}
          ></span>
        </div>
        <h3 className="product__title">{title}</h3>
        <p className="product__desc">{description}</p>
        <div className="price-wrapper">
          {stock ? (
            <span className="product__delivery">We can deliver</span>
          ) : (
            <span className="product__delivery">Pre-order</span>
          )}
          <span className="product__new-price">{price}$</span>
        </div>

        <p className="category">Category: {category}</p>
        <p className="collection">{`Collection: ${this.season} ${this.year}`}</p>
      </li>
    );
  }
}

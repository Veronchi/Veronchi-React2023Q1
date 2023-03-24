import { Component } from 'react';
import { FormItemProps } from '@/utils/interfaces';

export class FormItem extends Component<FormItemProps> {
  constructor(props: FormItemProps) {
    super(props);
  }

  render() {
    const { title, description, price, category, collection, forWhom, isFavorite, img } =
      this.props;
    return (
      <li className="form-item">
        <img src={img} alt="item image" />
        <h1 className="form-item__title">{title}</h1>
        <p className="form-item__desc">{description}</p>
        <span className="form-item__price">{price}</span>
        <span className="form-item__category">{category}</span>
        <span className="form-item__collection">{collection}</span>
        <span className="form-item__forWhom">{forWhom}</span>
        <span className="form-item__isFavorite">{isFavorite}</span>
      </li>
    );
  }
}

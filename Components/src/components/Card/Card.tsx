import { Component } from 'react';
import { CardState, Product } from 'utils/interfaces';
import './style.scss';

export class Card extends Component<Product, CardState> {
  constructor(props: Product) {
    super(props);
    this.state = {
      isLiked: this.props.isLiked,
    };
  }

  handleClick() {
    this.setState({ isLiked: !this.state.isLiked });
  }

  render() {
    const { title, img, rating, description, oldPrice, newPrice } = this.props;
    return (
      <li className="product" role="product">
        <img className="product__img" src={img} alt="product image" />
        <div className="info-wrapper">
          <span className="product__rating">{rating}</span>
          <button
            className={this.state.isLiked ? 'product__like fill' : 'product__like'}
            type="button"
            onClick={() => this.handleClick()}
          ></button>
        </div>
        <h3 className="product__title">{title}</h3>
        <p className="product__desc">{description}</p>
        <div className="price-wrapper">
          {oldPrice ? <span className="product__old-price">{oldPrice}$</span> : undefined}
          <span className="product__new-price">{newPrice}$</span>
        </div>
        <button className="product__btn" type="button">
          Add to cart
        </button>
      </li>
    );
  }
}

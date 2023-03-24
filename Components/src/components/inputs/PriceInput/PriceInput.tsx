import { Component } from 'react';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';
import { InputProps, InputState } from '@/utils/interfaces';

export class PriceInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="price">Price: </label>
        <input type="number" name="price" inputMode="numeric" defaultValue="" ref={forwardRef} />
        <span>{errors.includes(ErrorTypes.EMPTY_PRICE) && ErrorMessage.EMPTY_PRICE}</span>
        <span>{errors.includes(ErrorTypes.NEGATIVE_PRICE) && ErrorMessage.NEGATIVE_PRICE}</span>
      </div>
    );
  }
}

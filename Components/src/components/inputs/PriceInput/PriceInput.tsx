import { Component } from 'react';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';
import { InputProps, InputState } from '@/utils/interfaces';

export class PriceInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__wrapper">
        <label className="form__label">
          Price:
          <input
            type="number"
            className="form__input form__input_price"
            min="0"
            name="price"
            inputMode="numeric"
            defaultValue=""
            ref={forwardRef}
          />
        </label>
        <span className="error-message">
          {errors.includes(ErrorTypes.EMPTY_PRICE) && ErrorMessage.EMPTY_PRICE}
        </span>
        <span className="error-message">
          {errors.includes(ErrorTypes.NEGATIVE_PRICE) && ErrorMessage.NEGATIVE_PRICE}
        </span>
      </div>
    );
  }
}

import { InputProps, InputState } from '@/utils/interfaces';
import { Component } from 'react';

export class PriceInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          inputMode="numeric"
          defaultValue=""
          ref={forwardRef}
          required
        />
      </div>
    );
  }
}

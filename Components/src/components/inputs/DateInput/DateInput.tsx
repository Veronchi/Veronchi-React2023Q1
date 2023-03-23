import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';

export class DateInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="collection">Collection: </label>
        <input
          type="date"
          name="collection"
          defaultValue=""
          min="2018-01-01"
          max="2023-12-31"
          ref={forwardRef}
          required
        />
      </div>
    );
  }
}

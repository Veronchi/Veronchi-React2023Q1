import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class DateInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__wrapper">
        <label htmlFor="collection">
          Collection:
          <input
            type="date"
            name="collection"
            defaultValue=""
            min="2018-01-01"
            max="2023-12-31"
            ref={forwardRef}
            className="form__input"
          />
        </label>
        <span className="error-message error-message_middle">
          {errors.includes(ErrorTypes.EMPTY_DATE) && ErrorMessage.EMPTY_DATE}
        </span>
      </div>
    );
  }
}

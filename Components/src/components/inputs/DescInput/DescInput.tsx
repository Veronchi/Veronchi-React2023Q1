import { Component } from 'react';
import { InputState, TextAreaProps } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class DescInput extends Component<TextAreaProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__wrapper form__wrapper_row">
        <label htmlFor="desc" className="form__label_area">
          Description:{' '}
        </label>
        <textarea
          name="desc"
          defaultValue=""
          className="form__input form__input_area"
          ref={forwardRef}
        />
        <span className="error-message error-message_desc">
          {errors.includes(ErrorTypes.EMPTY_DESC) && ErrorMessage.EMPTY_DESC}
        </span>
        <span className="error-message error-message_desc">
          {errors.includes(ErrorTypes.SHORT_DESC) && ErrorMessage.SHORT_DESC}
        </span>
      </div>
    );
  }
}

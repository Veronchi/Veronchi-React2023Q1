import { Component } from 'react';
import { InputState, TextAreaProps } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class DescInput extends Component<TextAreaProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="desc">Description: </label>
        <textarea name="desc" defaultValue="" ref={forwardRef} />
        <span className="error-message">
          {errors.includes(ErrorTypes.EMPTY_DESC) && ErrorMessage.EMPTY_DESC}
        </span>
        <span className="error-message">
          {errors.includes(ErrorTypes.SHORT_DESC) && ErrorMessage.SHORT_DESC}
        </span>
      </div>
    );
  }
}

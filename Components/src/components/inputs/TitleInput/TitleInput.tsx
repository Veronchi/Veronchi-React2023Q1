import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class TitleInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__wrapper">
        <label className="form__label">
          Title:
          <input
            type="text"
            name="title"
            className="form__input"
            ref={forwardRef}
            defaultValue=""
          />
        </label>
        <span className="error-message">
          {errors.includes(ErrorTypes.EMPTY_TITLE) && ErrorMessage.EMPTY_TITLE}
        </span>
        <span className="error-message">
          {errors.includes(ErrorTypes.SHORT_TITLE) && ErrorMessage.SHORT_TITLE}
        </span>
      </div>
    );
  }
}

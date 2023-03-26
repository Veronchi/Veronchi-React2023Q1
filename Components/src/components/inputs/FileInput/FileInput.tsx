import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class FileInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__wrapper form__wrapper_file">
        <label className="file-label" htmlFor="img">
          Click me to upload image
        </label>
        <input
          type="file"
          name="img"
          id="img"
          ref={forwardRef}
          accept="image/*"
          className="file-input"
        ></input>
        <span className="error-message error-message_file">
          {errors.includes(ErrorTypes.EMPTY_FILE) && ErrorMessage.EMPTY_FILE}
        </span>
        <span className="error-message error-message_file">
          {errors.includes(ErrorTypes.FILE) && ErrorMessage.FILE}
        </span>
      </div>
    );
  }
}

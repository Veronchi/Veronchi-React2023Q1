import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class FileInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="img">Click me to upload image</label>
        <input
          type="file"
          name="img"
          id="img"
          ref={forwardRef}
          accept="image/*"
          style={{ display: 'none' }}
        ></input>
        <span>{errors.includes(ErrorTypes.EMPTY_FILE) && ErrorMessage.EMPTY_FILE}</span>
        <span>{errors.includes(ErrorTypes.FILE) && ErrorMessage.FILE}</span>
      </div>
    );
  }
}

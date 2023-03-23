import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';

export class FileInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="img">Upload image: </label>
        <input type="file" name="img" ref={forwardRef} accept="image/*" required></input>
      </div>
    );
  }
}

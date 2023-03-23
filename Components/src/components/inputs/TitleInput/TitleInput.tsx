import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';

export class TitleInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" ref={forwardRef} defaultValue="" required />
      </div>
    );
  }
}

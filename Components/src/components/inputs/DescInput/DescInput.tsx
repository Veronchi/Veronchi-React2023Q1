import { Component } from 'react';
import { InputState, TextAreaProps } from '@/utils/interfaces';

export class DescInput extends Component<TextAreaProps, InputState> {
  render() {
    const { forwardRef } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="desc">Description: </label>
        <textarea name="desc" defaultValue="" ref={forwardRef} required />
      </div>
    );
  }
}

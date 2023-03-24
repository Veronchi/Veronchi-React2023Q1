import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';

export class CheckInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="agree">Add to favorite?</label>
        <input type="checkbox" ref={forwardRef} defaultChecked={false} name="agree" />
      </div>
    );
  }
}

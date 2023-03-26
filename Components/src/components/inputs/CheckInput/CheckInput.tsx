import { Component } from 'react';
import { InputProps, InputState } from '@/utils/interfaces';

export class CheckInput extends Component<InputProps, InputState> {
  render() {
    const { forwardRef } = this.props;

    return (
      <div className="form__wrapper form__wrapper_radio">
        <label htmlFor="delivery">In stock:</label>
        <input type="checkbox" ref={forwardRef} defaultChecked={false} name="agree" />
      </div>
    );
  }
}

import { Component } from 'react';
import { InputState, RadioProps } from '@/utils/interfaces';

export class RadioInput extends Component<RadioProps, InputState> {
  render() {
    const { forwardRef } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="forWhom">For whom: </label>
        <input
          type="radio"
          name="forWhom"
          ref={forwardRef.forMen}
          defaultChecked={false}
          id="men"
          required
        />
        <label htmlFor="men">Men</label>
        <input
          type="radio"
          name="forWhom"
          ref={forwardRef.forWomen}
          defaultChecked={false}
          id="women"
          required
        />
        <label htmlFor="women">Women</label>
      </div>
    );
  }
}

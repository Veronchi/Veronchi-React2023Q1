import { Component } from 'react';
import { InputState, RadioProps } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class RadioInput extends Component<RadioProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__input">
        <label htmlFor="forWhom">For whom: </label>
        <input
          type="radio"
          name="forWhom"
          ref={forwardRef.forMen}
          defaultChecked={false}
          id="men"
        />
        <label htmlFor="men">Men</label>
        <input
          type="radio"
          name="forWhom"
          ref={forwardRef.forWomen}
          defaultChecked={false}
          id="women"
        />
        <label htmlFor="women">Women</label>
        <span className="error-message">
          {errors.includes(ErrorTypes.RADIO) && ErrorMessage.RADIO}
        </span>
      </div>
    );
  }
}

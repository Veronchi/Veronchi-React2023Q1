import { Component } from 'react';
import { InputState, RadioProps } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class RadioInput extends Component<RadioProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__wrapper form__wrapper_radio">
        <label htmlFor="forWhom" className="form__label">
          For whom:{' '}
        </label>
        <input
          type="radio"
          name="forWhom"
          ref={forwardRef.forMen}
          defaultChecked={false}
          id="men"
          className="form__input_radio"
        />
        <label htmlFor="men">Men</label>
        <input
          type="radio"
          name="forWhom"
          ref={forwardRef.forWomen}
          defaultChecked={false}
          id="women"
          className="form__input_radio"
        />
        <label htmlFor="women">Women</label>
        <span className="error-message error-message_radio">
          {errors.includes(ErrorTypes.RADIO) && ErrorMessage.RADIO}
        </span>
      </div>
    );
  }
}

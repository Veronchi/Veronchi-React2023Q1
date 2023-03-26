import { Component } from 'react';
import { InputState, RadioProps } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class RadioInput extends Component<RadioProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;

    return (
      <div className="form__wrapper form__wrapper_radio">
        <label htmlFor="isFav" className="form__label">
          Add to favorite:{' '}
        </label>
        <input
          type="radio"
          name="radio"
          ref={forwardRef.favYes}
          value="yes"
          defaultChecked={false}
          id="yes"
          className="form__input_radio"
        />
        <label htmlFor="yes">Yes</label>
        <input
          type="radio"
          name="radio"
          ref={forwardRef.favNo}
          defaultChecked={false}
          id="no"
          className="form__input_radio"
        />
        <label htmlFor="no">No</label>
        <span className="error-message error-message_radio">
          {errors.includes(ErrorTypes.RADIO) && ErrorMessage.RADIO}
        </span>
      </div>
    );
  }
}

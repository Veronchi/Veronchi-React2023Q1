import { Component } from 'react';
import { InputState, SelectProps } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class SelectInput extends Component<SelectProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;
    return (
      <div className="form__wrapper">
        <label htmlFor="category">
          Category:
          <select name="category" className="form__input form__input_select" ref={forwardRef}>
            <option defaultValue="" hidden>
              Select category
            </option>
            <option defaultValue="Sweater">Sweaters</option>
            <option defaultValue="Jeans">Jeans</option>
            <option defaultValue="Top">Top</option>
            <option defaultValue="Scarf">Scarf</option>
            <option defaultValue="Dress">Dress</option>
            <option defaultValue="Jumpsuit">Jumpsuit</option>
            <option defaultValue="Socks">Socks</option>
          </select>
        </label>
        <span className="error-message error-message_middle">
          {errors.includes(ErrorTypes.CHOOSE_SELECT) && ErrorMessage.SELECT}
        </span>
      </div>
    );
  }
}

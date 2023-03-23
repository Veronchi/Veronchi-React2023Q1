import { Component } from 'react';
import { InputState, SelectProps } from '@/utils/interfaces';
import { ErrorMessage, ErrorTypes } from '@/utils/enums';

export class SelectInput extends Component<SelectProps, InputState> {
  render() {
    const { forwardRef, errors } = this.props;
    return (
      <div className="form__input">
        <label htmlFor="category">Category: </label>
        <select name="category" ref={forwardRef}>
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
        <span className="error-message">
          {errors.includes(ErrorTypes.CHOOSE_SELECT) && ErrorMessage.SELECT}
        </span>
      </div>
    );
  }
}

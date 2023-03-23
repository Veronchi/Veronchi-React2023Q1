import { Component } from 'react';
import { InputState, SelectProps } from '@/utils/interfaces';

export class SelectInput extends Component<SelectProps, InputState> {
  render() {
    const { forwardRef } = this.props;
    return (
      <div className="form__input">
        <label htmlFor="category">Category: </label>
        <select name="category" ref={forwardRef} required>
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
      </div>
    );
  }
}

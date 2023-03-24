import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormListProps } from '@/utils/interfaces';
import { FormItem } from '..';
import './style.scss';

export class FormList extends Component<FormListProps> {
  render() {
    return (
      <ul className="form-list">
        {this.props.items.map((item) => {
          return <FormItem key={uuidv4()} {...item} />;
        })}
      </ul>
    );
  }
}

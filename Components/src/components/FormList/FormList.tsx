import { Component } from 'react';
import { FormListProps } from '@/utils/interfaces';
import { FormItem } from '..';
import './style.scss';

export class FormList extends Component<FormListProps> {
  render() {
    return (
      <ul className="form-list">
        {this.props.items.map((item) => {
          return <FormItem key={`${item.category}:${item.title}`} {...item} />;
        })}
      </ul>
    );
  }
}

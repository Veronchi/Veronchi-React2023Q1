import { Component } from 'react';
import { Form } from '@/components';
import { FormItem, FormPageProps, FormPageState } from '@/utils/interfaces';
import './style.scss';

export class FormPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = (item: FormItem): void => {
    const { items } = this.state;
    this.setState({ items: [...items, item] });
  };

  render() {
    return (
      <section className="form-page">
        <h1 className="form-page__title">Form Page</h1>
        <Form addItem={this.addItem} />
      </section>
    );
  }
}

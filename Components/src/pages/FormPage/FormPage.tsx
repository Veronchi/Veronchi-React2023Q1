import React from 'react';
import { Component } from 'react';
import { Form, FormList } from '@/components';
import { FormItemInteface, FormPageProps, FormPageState } from '@/utils/interfaces';
import './style.scss';

export class FormPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = (item: FormItemInteface): void => {
    const { items } = this.state;
    this.setState({ items: [...items, item] });
  };

  render() {
    return (
      <section className="form-page" data-testid="form-page">
        <h1 className="form-page__title">Form Page</h1>
        <Form addItem={this.addItem} />
        <FormList items={this.state.items} />
      </section>
    );
  }
}

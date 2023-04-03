import { FC, useState } from 'react';
import { Form, FormList } from '@/components';
import { FormItemProps } from '@/utils/interfaces';
import './style.scss';

export const FormPage: FC = () => {
  const [items, setItems] = useState<Array<FormItemProps>>([]);

  const addItem = (item: FormItemProps): void => {
    setItems([...items, item]);
  };

  return (
    <section className="form-page" data-testid="form-page">
      <h1 className="form-page__title">Form Page</h1>
      <Form addItem={addItem} />
      <FormList items={items} />
    </section>
  );
};

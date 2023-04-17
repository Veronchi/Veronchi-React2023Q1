import { FC } from 'react';
import { Form, FormList } from '@/components';
import { useAppSelector } from '@/hooks/redux';
import './style.scss';

export const FormPage: FC = () => {
  const { cards } = useAppSelector((state) => state.form);

  return (
    <section className="form-page" data-testid="form-page">
      <h1 className="form-page__title">Form Page</h1>
      <Form />
      <FormList items={cards} />
    </section>
  );
};

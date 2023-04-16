import { render, screen } from '@testing-library/react';
import { FormPage } from './FormPage';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';

describe('<FormPage />', () => {
  let form: HTMLElement;
  const store = setupStore();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    form = screen.getByTestId('form-page');
  });

  it('render page', () => {
    expect(form).toBeInTheDocument();
  });
});

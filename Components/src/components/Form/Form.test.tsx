import { render, screen } from '@testing-library/react';
import { Form } from './Form';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';

describe('<Form />', () => {
  let form: HTMLFormElement;

  const init = () => {
    const store = setupStore();

    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    form = screen.getByTestId('form');
  };

  it('render component', () => {
    init();
    expect(form).toBeInTheDocument();
  });
});

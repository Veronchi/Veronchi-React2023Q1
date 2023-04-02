import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import { Form } from './Form';

describe('<Form />', () => {
  let form: HTMLFormElement;

  const init = () => {
    const mockFn = vitest.fn();
    render(<Form addItem={mockFn} />);
    form = screen.getByTestId('form');
  };

  it('render component', () => {
    init();
    expect(form).toBeInTheDocument();
  });
});

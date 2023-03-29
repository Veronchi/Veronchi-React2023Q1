import { render, screen } from '@testing-library/react';
import { FormPage } from './FormPage';

describe('<FormPage />', () => {
  let form: HTMLElement;

  beforeEach(() => {
    render(<FormPage />);
    form = screen.getByTestId('form-page');
  });

  it('render page', () => {
    expect(form).toBeInTheDocument();
  });
});

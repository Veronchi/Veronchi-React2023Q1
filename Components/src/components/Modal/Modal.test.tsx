import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('<Modal />', () => {
  let modal: HTMLDivElement;

  const init = () => {
    render(<Modal />);
    modal = screen.getByTestId('modal');
  };

  it('render component', () => {
    init();
    expect(modal).toBeInTheDocument();
  });
});

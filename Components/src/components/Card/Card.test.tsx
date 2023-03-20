import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { products } from '@/utils/mockData';
import { Card } from './Card';

describe('<Card />', () => {
  let card: HTMLElement;
  const product = products[0];

  beforeEach(() => {
    render(<Card {...product} />);
    card = screen.getAllByRole('product')[0];
  });

  it('render component', () => {
    expect(card).toBeInTheDocument();
  });

  it('render card props properly', () => {
    expect(card).toContainHTML(product.img);
    expect(card).toContainHTML(product.title);
    expect(card).toContainHTML(product.description);
    expect(card).toContainHTML(product.rating);
    expect(card).toContainHTML(product.newPrice);
  });

  it('like product', async () => {
    const user = userEvent.setup();
    const like = vi.spyOn(user, 'click');
    const likeButton = screen.getByTestId('like');
    await user.click(likeButton);
    expect(like).toHaveBeenCalledTimes(1);
  });
});

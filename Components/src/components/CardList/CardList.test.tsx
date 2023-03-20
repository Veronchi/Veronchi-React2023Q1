import { render, screen, within } from '@testing-library/react';
import { CardList } from './CardList';
import { products } from '../../utils/mockData';

describe('<CardList />', () => {
  let productsList: HTMLUListElement;

  beforeEach(() => {
    render(<CardList />);
    productsList = screen.getByTestId('products-list');
  });

  it('render component', () => {
    expect(productsList).toBeInTheDocument();
  });

  it('render all cards', () => {
    const { getAllByRole } = within(productsList);
    const productItems = getAllByRole('product');

    expect(productItems).toHaveLength(products.length);
  });
});

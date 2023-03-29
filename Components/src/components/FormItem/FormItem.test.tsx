import { render, screen } from '@testing-library/react';
import { mockFormItem } from '@/utils/mockData';
import { FormItem } from './FormItem';

describe('<FormItem />', () => {
  let formItem: HTMLElement;
  const mockProps = mockFormItem();

  beforeEach(() => {
    render(<FormItem key="0" {...mockProps} />);
    formItem = screen.getAllByTestId('form-item')[0];
  });

  it('render component', () => {
    expect(formItem).toBeInTheDocument();
  });

  it('render form item props properly', () => {
    expect(formItem).toContainHTML(mockProps.img);
    expect(formItem).toContainHTML(mockProps.title);
    expect(formItem).toContainHTML(mockProps.description);
    expect(formItem).toContainHTML(mockProps.price);
    expect(formItem).toContainHTML(mockProps.category);
  });
});

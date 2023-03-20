import { render, screen } from '@testing-library/react';
import { spyOn } from '@vitest/spy';
import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {
  const getItemSpy = spyOn(Storage.prototype, 'getItem');
  const setItemSpy = spyOn(Storage.prototype, 'setItem');

  beforeEach(() => {
    render(<SearchBar />);
  });

  it('render search', () => {
    const searchInput = screen.getByPlaceholderText(/Search/i);
    expect(searchInput).toBeInTheDocument();
  });

  describe('add value', () => {
    it('setValue', () => {
      localStorage.setItem('inputValue', 'test');

      expect(setItemSpy).toHaveBeenCalledWith('inputValue', 'test');
      expect(localStorage.getItem('inputValue')).toStrictEqual('test');
    });
  });

  describe('get value', () => {
    it('getValue', () => {
      localStorage.setItem('inputValue', 'test');

      expect(localStorage.getItem('inputValue') || '[]').toStrictEqual('test');
      expect(getItemSpy).toHaveBeenCalledWith('inputValue');
    });
  });
});

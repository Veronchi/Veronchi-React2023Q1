import { render, screen } from '@testing-library/react';
import { spyOn } from '@vitest/spy';
import { vitest } from 'vitest';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store';

describe('<SearchBar />', () => {
  const getItemSpy = spyOn(Storage.prototype, 'getItem');
  const setItemSpy = spyOn(Storage.prototype, 'setItem');
  const store = setupStore();

  const searchProps = {
    handleSearch: vitest.fn(),
    handleKeyDown: vitest.fn(),
  };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchBar {...searchProps} />
      </Provider>
    );
  });

  it('render search', () => {
    const searchInput = screen.getByPlaceholderText(/find character/i);
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

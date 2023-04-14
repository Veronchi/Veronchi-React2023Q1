import { FC, RefObject, useEffect, useRef, KeyboardEvent } from 'react';
import './style.scss';

interface SearchProps {
  handleSearch: (el: RefObject<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>, el: RefObject<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchProps> = ({ handleSearch, handleKeyDown }) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const input = inputRef.current;

    if (input) {
      input.value = localStorage.getItem('inputValue') || '';
    }
  }, []);

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="find character"
        ref={inputRef}
        onKeyDown={(e) => handleKeyDown(e, inputRef)}
      />
      <button className="search__btn" type="button" onClick={() => handleSearch(inputRef)}>
        Search
      </button>
    </div>
  );
};

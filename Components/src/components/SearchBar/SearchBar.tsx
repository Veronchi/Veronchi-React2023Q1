import { FC, RefObject, useEffect, useRef } from 'react';
import './style.scss';

export const SearchBar: FC = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const input = inputRef.current;

    if (input) {
      input.value = localStorage.getItem('inputValue') || '';
    }

    return () => {
      localStorage.setItem('inputValue', input?.value || '');
    };
  }, []);

  return (
    <form className="search">
      <span className="input-container">
        <input className="search__input" type="text" placeholder="Search" ref={inputRef} />
      </span>
    </form>
  );
};

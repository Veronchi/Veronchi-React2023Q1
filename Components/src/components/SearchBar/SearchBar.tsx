import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import './style.scss';

export const SearchBar: FC = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('inputValue') || '');
  const inputRef = useRef(searchValue);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', inputRef.current || '');
    };
  }, []);

  useEffect(() => {
    inputRef.current = searchValue;
  }, [searchValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    localStorage.setItem('inputValue', inputValue);
  };

  return (
    <form className="search">
      <span className="input-container">
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
      </span>
    </form>
  );
};

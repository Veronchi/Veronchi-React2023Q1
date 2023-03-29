import { ChangeEvent, FC, useEffect, useState } from 'react';
import './style.scss';

export const SearchBar: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const value = localStorage.getItem('inputValue') || '';
    setSearchValue(value);
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

import { FC, RefObject, useEffect, useState, KeyboardEvent } from 'react';
import { CardList, CharacterModal, Spinner, SearchBar } from '@/components';
import { fetchAllCharacters, filterCharacters } from '@/services';
import { Character } from '@/utils/interfaces';
import './style.scss';

export const MainPage: FC = () => {
  const [data, setData] = useState<Array<Character>>([]);
  const [isFail, setIsFail] = useState(false);
  const [modalData, setModalData] = useState<Character | null>(null);
  const [isInProgress, setIsInProgress] = useState(false);

  const fetchData = async () => {
    setIsInProgress(true);
    const data = await fetchAllCharacters();
    setData(data.results);
    setIsInProgress(false);
  };

  const filterData = async (value: string) => {
    const data = await filterCharacters(value);
    setData(data.results);
    setIsInProgress(false);
  };

  const handleSearch = async (el: RefObject<HTMLInputElement>) => {
    setIsInProgress(true);
    try {
      const input = el.current;

      if (input) {
        const data = await filterCharacters(input.value as string);
        localStorage.setItem('inputValue', input.value || '');
        setData(data.results);
        setIsFail(false);
        setIsInProgress(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        (el.current as HTMLInputElement).value = '';
        localStorage.setItem('inputValue', '');
        setIsFail(true);
        setIsInProgress(false);
      }
    }
  };

  const handleKeyDown = async (
    e: KeyboardEvent<HTMLInputElement>,
    el: RefObject<HTMLInputElement>
  ) => {
    try {
      if (e.key === 'Enter') {
        const data = await filterCharacters(el.current?.value as string);
        localStorage.setItem('inputValue', el.current?.value || '');
        setData(data.results);
        setIsFail(false);
        setIsInProgress(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        (el.current as HTMLInputElement).value = '';
        localStorage.setItem('inputValue', '');
        setIsFail(true);
        setIsInProgress(false);
      }
    }
  };

  useEffect(() => {
    const value = localStorage.getItem('inputValue');

    if (!value) {
      fetchData();
    } else {
      filterData(value);
    }
  }, []);

  return (
    <section className="main">
      <div className="top-content">
        <h1 className="main__title">CHARACTERS</h1>
        <SearchBar handleSearch={handleSearch} handleKeyDown={handleKeyDown} />
      </div>
      {isInProgress ? (
        <Spinner />
      ) : (
        <CardList isFail={isFail} characters={data} setModalData={setModalData} />
      )}

      {modalData && <CharacterModal data={modalData} setModalData={setModalData} />}
    </section>
  );
};

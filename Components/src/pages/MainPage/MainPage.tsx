import { FC, RefObject, useEffect, useState, KeyboardEvent } from 'react';
import { CardList, CharacterModal, Spinner, SearchBar } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { charactersAPI } from '@/store/service';
import { updateSearch } from '@/store/reducers/SearchSlice';
import './style.scss';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search);
  const [charId, setCharId] = useState<number | null>(null);

  const { data, isError, isFetching, refetch } = charactersAPI.useFetchAllCharactersQuery(search);

  const handleModal = (id: number) => {
    setCharId(id);
  };

  const handleSearch = (el: RefObject<HTMLInputElement>) => {
    const input = el.current as HTMLInputElement;

    dispatch(updateSearch(input.value));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, el: RefObject<HTMLInputElement>) => {
    const input = el.current as HTMLInputElement;

    if (e.key === 'Enter') {
      dispatch(updateSearch(input.value));
    }
  };

  useEffect(() => {
    refetch();
  }, [search, refetch]);

  return (
    <section className="main">
      <div className="top-content">
        <h1 className="main__title">CHARACTERS</h1>
        <SearchBar handleSearch={handleSearch} handleKeyDown={handleKeyDown} />
      </div>
      {isError ? (
        <h3 className="fail-text">Nothing found</h3>
      ) : isFetching ? (
        <Spinner />
      ) : (
        <CardList data={data?.results} handleModal={handleModal} />
      )}

      {charId && <CharacterModal id={charId} setCharId={setCharId} />}
    </section>
  );
};

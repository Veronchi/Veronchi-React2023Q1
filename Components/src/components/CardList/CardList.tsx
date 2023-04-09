import { Dispatch, FC, SetStateAction } from 'react';
import { Card } from '../index';
import { Character } from '@/utils/interfaces';
import { fetchCharacter } from '@/services';
import './style.scss';

interface CardListProps {
  isFail: boolean;
  characters: Character[];
  setModalData: Dispatch<SetStateAction<Character | null>>;
}

export const CardList: FC<CardListProps> = ({ isFail, characters, setModalData }) => {
  const handleClick = async (id: number) => {
    const data = await fetchCharacter(id);

    setModalData(data);
  };

  if (isFail) return <h3 className="fail-text">Nothing found</h3>;

  return (
    <ul className="products" data-testid="products-list">
      {characters.map((item) => (
        <Card key={item.id} character={{ ...item }} handleClick={handleClick} />
      ))}
    </ul>
  );
};

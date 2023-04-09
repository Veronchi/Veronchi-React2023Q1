import { Character } from '@/utils/interfaces';
import { render, screen, within } from '@testing-library/react';
import { vitest } from 'vitest';
import { CardList } from './CardList';
// import { products } from '@/utils/mockData';

describe('<CardList />', () => {
  const testArr: Character[] = [
    {
      id: 0,
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
      },
      location: {
        name: 'Citadel of Ricks',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
      ],
    },
    {
      id: 1,
      name: 'Morty',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
        name: 'unknown',
      },
      location: {
        name: 'Citadel of Ricks',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
      ],
    },
  ];
  const isFail = false;
  const setModalData = vitest.fn();
  let productsList: HTMLUListElement;

  beforeEach(() => {
    render(<CardList characters={testArr} isFail={isFail} setModalData={setModalData} />);
    productsList = screen.getByTestId('products-list');
  });

  it('render component', () => {
    expect(productsList).toBeInTheDocument();
  });

  it('render all cards', () => {
    const { getAllByTestId } = within(productsList);
    const productItems = getAllByTestId('card');

    expect(productItems).toHaveLength(testArr.length);
  });
});

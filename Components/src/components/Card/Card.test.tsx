import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import { Card } from './Card';
import { Character } from '@/utils/interfaces';

describe('<Card />', () => {
  let card: HTMLElement;
  const testCharacter: Character = {
    id: 1,
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
    episode: ['https://rickandmortyapi.com/api/episode/27'],
  };
  const handleClick = vitest.fn();

  beforeEach(() => {
    render(<Card character={testCharacter} handleClick={handleClick} />);
    card = screen.getAllByTestId('card')[0];
  });

  it('render component', () => {
    expect(card).toBeInTheDocument();
  });

  it('render card props properly', () => {
    expect(card).toContainHTML(testCharacter.image);
    expect(card).toContainHTML(testCharacter.name);
  });
});

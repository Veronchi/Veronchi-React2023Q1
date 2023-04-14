import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import { CharacterModal } from './CharacterModal';

describe('<CharacterModal />', () => {
  let modal: HTMLDivElement;
  const modalProps = {
    data: {
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
    },
    setModalData: vitest.fn(),
  };

  const init = () => {
    render(<CharacterModal {...modalProps} />);
    modal = screen.getByTestId('char-modal');
  };

  it('render component', () => {
    init();
    expect(modal).toBeInTheDocument();
  });
});

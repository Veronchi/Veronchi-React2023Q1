import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import { CharacterModal } from './CharacterModal';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';

describe('<CharacterModal />', () => {
  let modal: HTMLDivElement;
  const store = setupStore();
  const modalProps = {
    id: 1,
    setCharId: vitest.fn(),
  };

  const init = () => {
    render(
      <Provider store={store}>
        <CharacterModal {...modalProps} />
      </Provider>
    );
    modal = screen.getByTestId('char-modal');
  };

  it('render component', () => {
    init();
    expect(modal).toBeInTheDocument();
  });
});

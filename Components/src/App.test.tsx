import App from './App';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Router', () => {
  const store = setupStore();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  it('Click the about router link', async () => {
    expect(screen.getByText('About')).toBeInTheDocument();
    const user = userEvent.setup();
    const about = vi.spyOn(user, 'click');
    const aboutLink = screen.getByText(/About/i);
    await user.click(aboutLink);
    expect(about).toHaveBeenCalledTimes(1);
  });

  it('Click the home router link', async () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    const user = userEvent.setup();
    const home = vi.spyOn(user, 'click');
    const homeLink = screen.getByText(/Home/i);
    await user.click(homeLink);
    expect(home).toHaveBeenCalledTimes(1);
  });

  it('notFound page', () => {
    render(
      <MemoryRouter initialEntries={['/*']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});

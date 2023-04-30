import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './store/store';
import App from './App';
import './index.scss';

interface IWindow extends Window {
  PRELOADED_STATE?: RootState;
}

const store = setupStore((window as IWindow).PRELOADED_STATE);
const rootContainer = document.getElementById('root') as HTMLElement;

function MyApp() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

if (import.meta.hot || !rootContainer?.innerText) {
  const root = createRoot(rootContainer!);
  root.render(<MyApp />);
} else {
  hydrateRoot(rootContainer!, <MyApp />);
  delete (window as IWindow).PRELOADED_STATE;
}

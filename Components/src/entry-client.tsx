import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './store/store';
import App from './App';
import './index.scss';

interface IWindow extends Window {
  PRELOADED_STATE?: RootState;
}

const store = setupStore((window as IWindow).PRELOADED_STATE);

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

delete (window as IWindow).PRELOADED_STATE;

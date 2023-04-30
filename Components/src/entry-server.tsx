import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './App';
import { charactersAPI } from './store/service';

export async function render(url: string, opt: RenderToPipeableStreamOptions) {
  const store = setupStore();
  store.dispatch(charactersAPI.endpoints.fetchAllCharacters.initiate(''));
  await Promise.all(store.dispatch(charactersAPI.util.getRunningQueriesThunk()));

  const fullStore = store.getState();
  const preloadedState = () => {
    return `<script>window.PRELOADED_STATE = ${JSON.stringify(fullStore).replace(
      /</g,
      '\\u003c'
    )}</script>`;
  };

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opt
  );

  return { stream, preloadedState };
}

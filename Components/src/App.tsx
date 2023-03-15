import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { About } from './pages/About/About';
import { NotFound } from './pages/NotFound/NotFound';
import './App.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about-us" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;

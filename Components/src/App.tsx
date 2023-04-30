import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components';
import { About, MainPage, NotFound, FormPage } from '@/pages';
import { Paths } from './utils/enums';
import './App.scss';

const App = (): JSX.Element => (
  <Routes>
    <Route path={Paths.DEFAULT} element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path={Paths.ABOUT} element={<About />} />
      <Route path={Paths.FORM} element={<FormPage />} />
    </Route>

    <Route path={Paths.ERROR} element={<NotFound />} />
  </Routes>
);

export default App;

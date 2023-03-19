import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { About } from './pages/About/About';
import { NotFound } from './pages/NotFound/NotFound';
import './App.scss';

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="about-us" element={<About />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;

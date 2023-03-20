import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, Form } from '@/components';
import { About, MainPage, NotFound } from '@/pages';
import './App.scss';

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<MainPage />} />
      <Route index element={<Navigate to="home" replace />} />
      <Route path="about-us" element={<About />} />
      <Route path="from" element={<Form />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;

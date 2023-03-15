import { Outlet } from 'react-router-dom';
import { Footer, Header } from '.';

export const Layout = (): JSX.Element => {
  return (
    <div className="container">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '.';

export const Layout: FC = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

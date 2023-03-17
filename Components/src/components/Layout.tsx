import { Component, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '.';

export class Layout extends Component {
  render(): ReactNode {
    return (
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}

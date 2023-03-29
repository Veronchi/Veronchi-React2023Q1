import { FC } from 'react';
import { CardList, SearchBar } from '@/components';
import './style.scss';

export const MainPage: FC = () => {
  return (
    <section className="main">
      <div className="top-content">
        <h1 className="main__title">WOMEN</h1>
        <SearchBar />
      </div>
      <CardList />
    </section>
  );
};

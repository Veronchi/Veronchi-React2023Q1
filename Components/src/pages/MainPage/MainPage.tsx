import { CardList, SearchBar } from '../../components/index';
import { Component } from 'react';
import './style.scss';

export class MainPage extends Component {
  render() {
    return (
      <section className="main">
        <div className="top-content">
          <h1 className="main__title">WOMEN</h1>
          <SearchBar />
        </div>
        <CardList />
      </section>
    );
  }
}

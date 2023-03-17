import { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export class NotFound extends Component {
  render() {
    return (
      <section className="notfound">
        <h1 className="notfound__title">404</h1>
        <h3 className="notfound__subtitle">Page not found</h3>
        <p className="notfound__text">
          Go to the{' '}
          <Link className="notfound__link" to="/">
            Homepage
          </Link>
        </p>
      </section>
    );
  }
}

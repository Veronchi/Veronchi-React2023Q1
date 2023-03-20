import { Component } from 'react';
import rssIcon from '@/assets/icons/rs_school_js.svg';
import './style.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__item">
            <span>&copy; 2023</span>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/Veronchi"
              target="_blank"
              rel="author noreferrer"
            >
              Veronchi
            </a>
          </li>
          <li className="footer__item">
            <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
              <img className="footer__img" src={rssIcon} alt="rsschool" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

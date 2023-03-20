import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/icons/Logo.svg';
import './style.scss';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="header__nav">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? 'header__link pending' : isActive ? 'header__link active' : 'header__link'
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? 'header__link pending' : isActive ? 'header__link active' : 'header__link'
            }
            to="/about-us"
          >
            About
          </NavLink>
        </nav>
      </header>
    );
  }
}

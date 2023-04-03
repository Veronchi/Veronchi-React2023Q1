import { FC } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/icons/Logo.svg';
import { Paths } from '@/utils/enums';
import { HeaderClasses } from '@/utils/enums';
import './style.scss';

interface ClassProps {
  isActive: boolean;
  isPending: boolean;
}

export const Header: FC = () => {
  const location = useLocation();
  const { LINK, PENDING, ACTIVE } = HeaderClasses;
  const { HOME, ABOUT, FORM } = Paths;

  const classValue = ({ isActive, isPending }: ClassProps) =>
    isPending ? PENDING : isActive ? ACTIVE : LINK;

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="header__nav">
        <NavLink className={classValue} to={HOME}>
          Home
        </NavLink>
        <NavLink className={classValue} to={`/${ABOUT}`}>
          About
        </NavLink>
        <NavLink className={classValue} to={`/${FORM}`}>
          Form
        </NavLink>
      </nav>
      <span>currante page: {location.pathname.slice(1)}</span>
    </header>
  );
};

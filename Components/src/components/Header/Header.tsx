import { FC } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
  const { DEFAULT, ABOUT, FORM } = Paths;

  const classValue = ({ isActive, isPending }: ClassProps) =>
    isPending ? PENDING : isActive ? ACTIVE : LINK;

  return (
    <header className="header">
      <Link to={DEFAULT} className="header__logo">
        <h1 className="header__title">Rick and Morty</h1>
      </Link>
      <nav className="header__nav" data-cy="header__nav">
        <NavLink className={classValue} to={DEFAULT}>
          Home
        </NavLink>
        <NavLink className={classValue} to={`/${ABOUT}`}>
          About
        </NavLink>
        <NavLink className={classValue} to={`/${FORM}`}>
          Form
        </NavLink>
      </nav>
      <span>currante page: {location.pathname.slice(1) || 'home'}</span>
    </header>
  );
};

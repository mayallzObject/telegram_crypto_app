import { NavLink } from 'react-router-dom';
import { NavigationItem } from './types';

export const NavItem = ({ path, children }: NavigationItem) => {
  return (
    <li>
      <NavLink to={path} end>
        {children}
      </NavLink>
    </li>
  );
};

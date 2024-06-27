import { NavLink } from 'react-router-dom';
import { NavigationItem } from './types';

export const NavItem = ({ path, children }: NavigationItem) => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <NavLink
        to={path}
        end
        style={{
          display: 'flex',
          listStyleType: 'none',
          textDecoration: 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          rowGap: 20,
          width: '15rem',
          paddingTop: 50,
          paddingBottom: 20,

          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {children}
      </NavLink>
    </li>
  );
};

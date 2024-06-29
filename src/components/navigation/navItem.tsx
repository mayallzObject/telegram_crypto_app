import { NavLink } from 'react-router-dom';
import { NavigationItem } from './types';
import '../../App.css';

export const NavItem = ({ path, children }: NavigationItem) => {
  return (
    <li
      style={{
        display: 'flex',
        listStyleType: 'none',
        position: 'relative', // Changed from 'absolute' to 'relative'
      }}
    >
      <NavLink
        to={path}
        end
        className={({ isActive }) => (isActive ? 'active-link' : '')}
        style={{
          display: 'flex',
          position: 'absolute',
          left: '-2.9rem',
          boxSizing: 'content-box',
          top: '-1.2rem', // Adjust this value as needed to position text images outside the top
          listStyleType: 'none',
          textDecoration: 'none',
          backgroundColor: 'white',
          alignItems: 'center',
          rowGap: '1rem',
          width: '6rem',
          paddingTop: '1rem', // Adjust padding top to create space for the overflow
          paddingBottom: 20,
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          flexDirection: 'column',
        }}
      >
        {children}
      </NavLink>
    </li>
  );
};

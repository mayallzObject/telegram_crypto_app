import { items } from './items';
import { NavItem } from './navItem';

const NavBar = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="navbar-items-list">
        {items.map(({ path }) => (
          <NavItem key={path} path={path}>
            {path}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

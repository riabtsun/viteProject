import classes from './header.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PIZZA DAY</div>
      {location.pathname !== '/' && (
        <input
          type='text'
          className={classes.searchBar}
          placeholder='Search for the order #'
        />
      )}
      <ul className={classes.navList}>
        <li>
          <NavLink className={classes.navLink} to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink} to={'/menu'}>
            Menu
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

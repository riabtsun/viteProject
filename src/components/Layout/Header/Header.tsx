import classes from './header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import Input from '../../Input/Input.tsx';

const Header = () => {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PIZZA DAY</div>
      {location.pathname !== '/' && (
        <Input
          type='text'
          className={classes.searchBar}
          placeHolder='Search for the order #'
          ariaLabel='search-input'
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
        <li>
          <NavLink className={classes.navLink} to={'/cart'}>
            Cart
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

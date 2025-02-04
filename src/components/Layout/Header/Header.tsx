import classes from './header.module.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Input from '../../Input/Input.tsx';

const Header = () => {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <Link to={'/'}>
        <p className={classes.logo}>PIZZA DAY</p>
      </Link>
      {location.pathname !== '/' && (
        <Input
          type='text'
          className={classes.searchBar}
          placeHolder='Search for the order #'
          ariaLabel='search-input'
          withBtn={false}
        />
      )}
      <ul className={classes.navList}>
        <li>
          <NavLink to={'/menu'}>
            {({ isActive }) => (
              <span
                className={`${classes.navLink} ${isActive && classes.active}`}
              >
                Menu
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink} to={'/cart'}>
            {({ isActive }) => (
              <span
                className={`${classes.navLink} ${isActive && classes.active}`}
              >
                Cart
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

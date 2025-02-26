import { Link, NavLink, useLocation } from 'react-router-dom';
import SearchInput from '../../SearchInput/SearchInput.tsx';
import classes from './header.module.css';

const Header = () => {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <Link to={'/'}>
        <p className={classes.logo}>PIZZA DAY</p>
      </Link>
      {location.pathname !== '/' && (
        <SearchInput
          type='search'
          className={classes.searchBar}
          placeHolder='Search for the order #'
          ariaLabel='search-input'
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
        <li>
          <NavLink className={classes.navLink} to={'/form'}>
            {({ isActive }) => (
              <span
                className={`${classes.navLink} ${isActive && classes.active}`}
              >
                Form
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

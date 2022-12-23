import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <nav className={styles.header}>
      <NavLink to={'/'} className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/about'}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/login'}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/register'}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Registrar-se
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
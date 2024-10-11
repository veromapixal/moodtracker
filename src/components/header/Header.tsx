import classes from './Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <img src="" alt="logo" />
      <nav>
        <ul className={classes.nav_list}>
          <li className={classes.nav_item}>
            <a href="/">Home</a>
          </li>
          <li className={classes.nav_item}>
            <a href="/about">About</a>
          </li>
          <li className={classes.nav_item}>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

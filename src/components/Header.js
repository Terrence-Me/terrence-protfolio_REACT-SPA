import { Fragment } from 'react';
import classes from './Header.module.css';
import backgroundImage from './assets/images/simon-berger-2JONUbTfN38-unsplash.jpg';

function Header() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">RESUME</a>
            </li>
            <li>
              <a href="#">WORKS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className={classes['main-image']}>
          <img src={backgroundImage} alt="" />
        </div>
      </header>
    </Fragment>
  );
}

export default Header;

import { Fragment } from 'react';
import classes from './Header.module.css';
import resumeData from '../resumeData';
// import backgroundImage from './assets/images/simon-berger-2JONUbTfN38-unsplash.jpg';
import { FaArrowCircleDown, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Header(props) {
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
        <div className={classes.banner}>
          <div className={classes['banner-text']}>
            <h1> I am {resumeData.name}.</h1>
            <h3>
              I am a {resumeData.role}. {resumeData.roleDescription}
            </h3>
            <hr />
            <ul className={classes.social}>
              <a>
                <FaLinkedinIn />
              </a>
              <a>
                <FaGithub />
              </a>
            </ul>
          </div>
        </div>

        {/* <div className={classes['main-image']}>
          <img src={backgroundImage} alt="" />
        </div> */}
        <p>
          <FaArrowCircleDown />
        </p>
      </header>
    </Fragment>
  );
}

export default Header;

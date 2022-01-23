import { Fragment } from 'react';
import './Header.css';
import resumeData from '../resumeData';
// import backgroundImage from './assets/images/simon-berger-2JONUbTfN38-unsplash.jpg';
import { FaArrowCircleDown, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Header(props) {
  return (
    <Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll " href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
              I am a Junior full stack developer. I am solution-driven and adept
              at contributing to highly collaborative work environments.
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a href=" # ">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://github.com/Terrence-Me">
                  <FaGithub className="fa fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <FaArrowCircleDown className="icon-down-circle" />
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </Fragment>
  );
}

export default Header;

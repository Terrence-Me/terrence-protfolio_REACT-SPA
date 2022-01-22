import './Footer.css';
import { FaAngleDoubleUp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <a href="https://github.com/Terrence-Me"></a>
            </li>
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
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <FaAngleDoubleUp />
            {/* <i className="icon-up-open" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

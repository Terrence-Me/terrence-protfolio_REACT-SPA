import profile from './assets/images/Profile_picture.jpg';
import resumeData from '../resumeData';

import './About.css';

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profile} alt="profile" />
        </div>
        <div className="nine columns main-col">
          <h2> About Me </h2>
          <p>
            I am a seasoned professional with over 20-years of work experience.
            I learn quickly and easily adapt to changing environments. Worked
            through 1000+ hours of bootcamp structure, learning JavaScript,
            Node.js, and React.js. Eager to tackle web development and design
            challenges to achieve lasting impacts on user experience. I've
            recently completed 20-years of service to the U.S. Army and have
            international experience, as well as experience in other cultures.
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Terrence Meikle</span>
                <br></br>
                <span>Terrence_Meikle@email</span>
                <br></br>
                <span>https://github.com/Terrence-Me</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

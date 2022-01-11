import profile from './assets/images/Profile_picture.jpg';

import classes from './About.module.css';
function About() {
  return (
    <section className={classes['about-section']}>
      <div>
        <div>
          <img className={classes['profile-pic']} src={profile} alt="profile" />
        </div>
        <h2> About Me </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel
          ad sapiente aut ab, asperiores eum, officia quos, fugiat molestias
          aliquam fuga ipsa ea porro corrupti repellendus totam. Nihil,
          inventore?
        </p>
        <div>
          <div>
            <h2>Contact Details</h2>
            <p>
              <span>resumeData.name</span>
              <br></br>
              <span>resumeData.address</span>
              <br></br>
              <span>resumeData.website</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

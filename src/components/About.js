import profile from './assets/images/Profile_picture.jpg';
import resumeData from '../resumeData';
import classes from './About.module.css';

function About() {
  return (
    <section className={classes['about-section']}>
      <div className={classes.row}>
        <div className={(classes, classes.three, classes.columns)}>
          <img className={classes['profile-pic']} src={profile} alt="profile" />
        </div>
        <div className={(classes[(' columns', 'main-col')], classes.nine)}>
          <h2> About Me </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel
            ad sapiente aut ab, asperiores eum, officia quos, fugiat molestias
            aliquam fuga ipsa ea porro corrupti repellendus totam. Nihil,
            inventore?
          </p>
          <div>
            <div className={classes['contact-details ']}>
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
      </div>
    </section>
  );
}

export default About;

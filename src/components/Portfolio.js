// import resumeData from '../resumeData';
import './Portfolio.css';
import workout from './assets/images/workout-tracker.png';
import workday from './assets/images/work-day-scheduler-screenshot.png';
import mealPlanner from './assets/images/screenshot-meal-and-drink.png';
import weatherApp from './assets/images/Screenshot-weather-dashboard.png';
import noteTaker from './assets/images/Screenshot-note-taker.png';
import riposte from './assets/images/Screenshot-reposte-comments.png';

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01">
                  <img src={workout} alt="" className="item-img" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5> Workout Tracker </h5>
                      <p> Keep track of daily workouts </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="profileLinksDiv">
                <a href="https://github.com/Terrence-Me/workout-tracker">
                  Github Repo
                </a>
                <a href="https://thawing-lake-28274.herokuapp.com/?id=61b632c91200bf0016fe0667">
                  Deployed App
                </a>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01">
                  <img src={workday} alt="" className="item-img" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5> Worday Scheduler </h5>
                      <p> Keep track of your daily schedule </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="profileLinksDiv">
                <a href="https://github.com/Terrence-Me/work-day-scheduler">
                  Github Repo
                </a>
                <a href="https://terrence-me.github.io/work-day-scheduler/">
                  Deployed App
                </a>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01">
                  <img src={mealPlanner} alt="" className="item-img" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5> Meal Planner </h5>
                      <p> Find creative meal ideas </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="profileLinksDiv">
                <a href="https://github.com/Terrence-Me/project1">
                  Github Repo
                </a>
                <a href="https://terrence-me.github.io/project1/">
                  Deployed App
                </a>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01">
                  <img src={weatherApp} alt="" className="item-img" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5> Weather Dashboard </h5>
                      <p> Check the weather at your favorite location </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="profileLinksDiv">
                <a href="https://github.com/Terrence-Me/weather-dashboard">
                  Github Repo
                </a>
                <a href="https://terrence-me.github.io/weather-dashboard/">
                  Deployed App
                </a>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01">
                  <img src={noteTaker} alt="" className="item-img" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5> Note Taker </h5>
                      <p> Make and keep track of your notes </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="profileLinksDiv">
                <a href="https://github.com/Terrence-Me/express-note-taker">
                  Github Repo
                </a>
                <a href="https://secure-tor-33586.herokuapp.com/notes">
                  Deployed App
                </a>
              </div>
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01">
                  <img src={riposte} alt="" className="item-img" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5> Tech Commenting Service </h5>
                      <p> Post and comment on tech related issues </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="profileLinksDiv">
                <a href="https://github.com/Terrence-Me/project2-team-one">
                  Github Repo
                </a>
                <a href="https://thawing-fortress-53039.herokuapp.com/register">
                  Deployed App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

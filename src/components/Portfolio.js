// import resumeData from '../resumeData';
import './Portfolio.css';
import workout from './assets/images/workout-tracker.png';
import workday from './assets/images/work-day-scheduler-screenshot.png';
import mealPlanner from './assets/images/screenshot-meal-and-drink-generator-pg1.png';

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
            </div>
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01">
                  <img src={workday} alt="" className="item-img" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5> Worday Tracker </h5>
                      <p> Keep track of your daily schedule </p>
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

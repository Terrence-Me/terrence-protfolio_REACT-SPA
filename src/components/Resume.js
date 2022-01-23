import './Resume.css';

function Resume() {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>UNC-Chapel Hill Coding Bootcamp</h3>
              <p className="info">
                Full Stack Web Development
                <span>&bull;</span> <em className="date">Sep 2018</em>
              </p>
              {/* <p>{item.Achievements}</p> */}
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>Norwich University</h3>
              <p className="info">
                M.A. International Relations
                <span>&bull;</span> <em className="date">Sep 2018</em>
              </p>
              {/* <p>{item.Achievements}</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>U.S. Army </h3>
              <p className="info">
                Civil Affairs Specialist
                <span>&bull;</span>{' '}
                <em className="date">March 2003 - Present</em>
              </p>
              {/* <p>{item.Achievements}</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>Web Development</p>

          <div className="bars">
            <ul className="skills">
              <li>
                <span className="bar-expand html5"></span>
                <em>HTML</em>
              </li>
              <li>
                <span className="bar-expand css"></span>
                <em>CSS</em>
              </li>
              <li>
                <span className="bar-expand javaScript"></span>
                <em>JavaScript</em>
              </li>
              <li>
                <span className="bar-expand react"></span>
                <em>React.js</em>
              </li>
              <li>
                <span className="bar-expand nodejs"></span>
                <em>Node.js</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

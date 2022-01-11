import classes from './Resume.module.css';

function Resume() {
  return (
    <section className={classes['resume-section']}>
      <div>
        <h2>EDUCATION</h2>
      </div>
      <div>
        <h2>WORK</h2>
      </div>
      <div>
        <h2>SKILLS</h2>
      </div>
    </section>
  );
}

export default Resume;

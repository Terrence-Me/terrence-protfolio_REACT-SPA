import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4 className="flex">
              <span>
                <a href="mailto:terrence_meikle@email.com">Email</a>
              </span>
              <span>
                <a href="#">LinkedIn</a>
              </span>
              <span>
                <a href="tel:+123456789">Phone: 910-000-0000</a>
              </span>
            </h4>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;

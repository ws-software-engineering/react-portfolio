export default function AboutPage() {
  return (
    <div className="container pt-4 about-me-section">
      <h2>About Me</h2>
      <img src="/assets/milt-hinton.png"></img>
      <p>
      “A new way of looking at the world”. This is my professional mantra when approaching design, creative problem&ndash;solving and communication. As a Software Engineer, I use my skills in project management, writing, speaking, data analysis and business marketing to bring success to my projects. 
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Certifications</h3>
                <p className="lead mb-0">
                  Certified Professional Project Manager <br />
                  Google IT Automation with Python <br />
                  Mini-MBA <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Skills</h3>
                <p className="lead mb-0">
                  Software Engineering <br />
                  Data Engineering <br />
                  Project Management <br />
                  Data Analyst <br />
                  Writing & Presenting <br />
                  Design
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Education</h3>
                <p className="lead mb-0">
                  MFA in Fine Writing <br />
                  BA in Creative Writing <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

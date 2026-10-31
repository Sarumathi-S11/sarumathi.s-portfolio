
import "./App.css";

const projects = [
  {
    number: "01",
    name: "LupusCare AI",
    category: "AI Healthcare Application",
    description:
      "A healthcare support application with symptom diary, medicine tracking, appointments and health insights.",
    tech: ["Python", "Streamlit", "AI", "JSON"],
    github: "https://github.com/Sarumathi-S11/LupusCare-AI.git",
    demo:"https://lupuscare-ai.streamlit.app/",
  },
  {
    number: "02",
    name: "RetailPulse Analytics",
    category: "Data Analytics",
    description:
      "A retail analytics project exploring sales, profit, product performance and business insights.",
    tech: ["Python", "SQL", "Power BI", "Pandas"],
    github: "https://github.com/Sarumathi-S11/RetailPulse-Analytics",
    
  },
  {
    number: "03",
    name: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "A machine learning project designed to analyse customer behaviour and predict customer churn.",
    tech: ["Python", "Pandas", "Machine Learning"],
    
  },
];

const skills = [
  "Python", "SQL", "HTML", "CSS", "JavaScript",
  "React", "Power BI", "Machine Learning",
  "Pandas", "Git & GitHub"
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo"><span>SARUMATHI</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Sarumathi S</span>
            </h1>

            <h2>Aspiring Data Analyst ,AI / ML Engineer</h2>
            <p className="hero-subtitle">
                  B.Tech Artificial Intelligence & Data Science Student
            </p>

            <p className="hero-description">
              Passionate about Artificial Intelligence, Machine Learning
              and Web Development. I enjoy transforming ideas into
              meaningful digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Sarumathi-S11" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/sarumathi-s-84988732b" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="hero-card">
              <div className="hero-symbol">AI</div>
              <h3>Building Ideas</h3>
              <p>With Code & Creativity</p>
              <div className="hero-tags">
                <span>AI</span><span>ML</span><span>WEB</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-card">
            <p>
              I am a B.Tech Artificial Intelligence and Data Science student
              interested in building intelligent applications and practical
              technology solutions. I work with Python, SQL, analytics tools
              ,web technologies and Machine Learning Algorithms. 
              I am continuously improving my skills
              through hands-on projects and learning.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>{skill}</div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">SOME OF MY WORK</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.github ? (
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    View GitHub ↗
                  </a>
                ) : (
                  <span className="project-link unavailable">
                    
                  </span>
                )}
                {project.demo && (
  <a
    className="demo-btn"
    href={project.demo}
    target="_blank"
    rel="noreferrer"
  >
    Live Demo ↗
  </a>
)}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certificates">
          <p className="eyebrow">MY LEARNING JOURNEY</p>
          <h2 className="section-title">Certificates & <span>Training</span></h2>

          <div className="certificate-grid">
            {[
              "HP LIFE – Data Science & Analytics",
              "Tata – GenAI Powered Data Analytics Job Simulation",
              "Deloitte – Data Analytics Job Simulation",
              "UiPath – Automation Developer Associate Training",
              "CodeAlpha – Python Programming Virtual Internship",
              "Cognifyz – Data Science Internship"
            ].map((certificate) => (
              <div className="certificate-card" key={certificate}>
                <span>✦</span>
                <p>{certificate}</p>
              </div>
            ))}
          </div>
          <p className="certificate-note">
            Certificate details can be added as viewable links later.
          </p>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2 className="section-title">Have a project in <span>mind?</span></h2>
          <p>I'm open to learning opportunities, internships and collaborations.</p>

          <a className="primary-btn" href="mailto:sharusangar1157@gmail.com">
            Say Hello ↗
          </a>

          <div className="contact-links">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sharusangar1157@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Say Hello ↗
</a>
            <a href="https://linkedin.com/in/sarumathi-s-84988732b" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Sarumathi-S11" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Sarumathi S. Designed with passion.
      </footer>
    </div>
  );
}

export default App;

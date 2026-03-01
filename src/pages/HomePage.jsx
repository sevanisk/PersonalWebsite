//import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Pardon my dust. I'm learning React -_-</h1>
        <p>Web developer and [your profession/interests]</p>
        <a href="portfolio" className="cta-button">View My Work</a>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Brief bio about yourself, your background, skills, and what you're passionate about.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of what this project does</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of what this project does</p>
          <a href="#">View Project</a>
        </div>
      </section>
    </div>
  );
}
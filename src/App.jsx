import { useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    type: 'PYTHON · AUTOMATION',
    name: 'Technical Support & Troubleshooting Toolkit',
    description:
      'Scripts for checking system information, network connectivity, disk space, and basic system health, with documented troubleshooting steps.',
    tags: ['Python', 'Windows', 'Troubleshooting'],
  },
  {
    number: '02',
    type: 'JAVASCRIPT · REST API',
    name: 'Weather Dashboard',
    description:
      'A web app that retrieves weather information from an external API and updates the interface with clear, accessible results.',
    tags: ['JavaScript', 'REST APIs', 'HTML & CSS'],
  },
  {
    number: '03',
    type: 'REACT · LIVE UPDATES',
    name: 'Stock Dashboard',
    description:
      'A real-time dashboard using React and event-driven updates to make changing stock information easier to follow.',
    tags: ['React', 'JavaScript', 'Server-Sent Events'],
  },
  {
    number: '04',
    type: 'UI/UX · PROTOTYPE',
    name: 'Water Tracking Application',
    description:
      'A user-focused app concept shaped through personas, storyboards, wireframes, and high-fidelity prototypes.',
    tags: ['Figma', 'Accessibility', 'UI/UX'],
  },
]

const skills = ['Python', 'JavaScript', 'React', 'HTML & CSS', 'REST APIs', 'Git & GitHub', 'Networking · TCP/IP', 'Technical troubleshooting']

const experience = [
  { role: 'Elementary School Teacher', company: 'Success Academy', dates: 'Aug 2026 – Oct 2026', detail: 'Managed a classroom of 30+ scholars, maintained accurate records, used digital tools, and coordinated with families and staff to resolve day-to-day issues.' },
  { role: 'Fulfillment Expert', company: 'Target', dates: 'Nov 2024 – Jan 2025', detail: 'Used handheld technology and scanning systems to locate and fulfill orders, resolve product issues, and support customers in a fast-paced environment.' },
  { role: 'Customer Service & Operations', company: 'Ross, Hope’s Little Blessings Daycare, and Walgreens', dates: '2021 – 2024', detail: 'Built experience in customer support, clear communication, teamwork, and adapting to changing operational needs.' },
]

const githubUrl = 'https://github.com/akeilah8/akeilah8.github.io'
const linkedInUrl = 'https://www.linkedin.com/in/akeilah-plummer-62931120a'
const email = 'akeilahplummer8@gmail.com'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Akeilah Plummer, home">
          <span className="wordmark-mark">AP</span>
          <span>Akeilah Plummer</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE GRADUATE · NEW YORK CITY</p>
            <h1>Technology that feels<br /><em>clear and helpful.</em></h1>
            <p className="hero-intro">
              Hi, I’m <strong>Akeilah Plummer</strong> — a computer science graduate interested in technical operations, IT support, and building useful web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-note" aria-label="A note about my approach">
            <span className="note-star" aria-hidden="true">✳</span>
            <p>Curious by nature.<br />Helpful by design.</p>
            <span className="note-caption">BASED IN NEW YORK</span>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> A LITTLE ABOUT ME</a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-label"><span>01</span> ABOUT</div>
          <div className="about-content">
            <h2>Good technology should feel clear, helpful, and human.</h2>
            <div className="about-detail">
              <p>I earned my Bachelor of Science in Computer Science from SUNY Plattsburgh in May 2026. My studies included databases, operating systems, computer networks, software engineering, web development, and cybersecurity.</p>
              <p>I bring hands-on project experience with Python, JavaScript, React, REST APIs, and troubleshooting, along with a strong customer-service background. I’m interested in entry-level IT support, technical operations, and junior web roles where I can help people and keep growing my technical skills.</p>
              <a className="text-link" href="#contact">A bit more? Let’s connect <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap skills-inner">
            <div className="section-label"><span>02</span> TOOLKIT</div>
            <div className="skills-content">
              <h2>Tools I use<br />to solve problems.</h2>
              <p className="section-intro">A practical mix of software development, systems fundamentals, and end-user support.</p>
              <ul className="skill-list">
                {skills.map((skill, index) => (
                  <li key={skill}><span className="skill-index">0{index + 1}</span>{skill}<span className="skill-arrow" aria-hidden="true">↗</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap experience-inner">
            <div className="section-label"><span>03</span> EXPERIENCE</div>
            <div className="experience-content">
              <h2>People-first experience.<br /><em>Practical problem solving.</em></h2>
              <div className="experience-list">
                {experience.map((item) => (
                  <article className="experience-item" key={item.company}>
                    <div className="experience-heading"><div><h3>{item.role}</h3><p>{item.company}</p></div><span>{item.dates}</span></div>
                    <p className="experience-detail">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-label"><span>04</span> PROJECTS</div>
          <div className="projects-content">
            <div className="projects-heading">
              <h2>Small steps.<br /><em>Useful results.</em></h2>
              <p>Selected work across troubleshooting automation, web development, real-time data, and user-centered design.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-topline"><span>{project.type}</span><span>{project.number}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label="Technologies used">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label"><span>05</span> CONTACT</div>
            <div className="contact-content">
              <p className="eyebrow">IT SUPPORT · TECHNICAL OPERATIONS · JUNIOR WEB</p>
              <h2>Let’s solve<br /><em>something useful.</em></h2>
              <p className="contact-copy">Based in New York City. I’d be glad to connect about entry-level opportunities in IT support, technical operations, or web development.</p>
              <a className="button button-light" href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>
              <div className="social-links">
                <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home"><span className="wordmark-mark">AP</span><span>Akeilah Plummer</span></a>
        <p>Designed and built with care · © {new Date().getFullYear()} Akeilah Plummer</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App

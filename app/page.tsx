"use client";

import { useState } from "react";

const skills = [
  {
    number: "01",
    title: "Cybersecurity",
    description: "Security & Threat Analysis",
  },
  {
    number: "02",
    title: "Python",
    description: "Programming & Automation",
  },
  {
    number: "03",
    title: "Ethical Hacking",
    description: "Web Security & Pentesting",
  },
  {
    number: "04",
    title: "Kali Linux",
    description: "Security Tools",
  },
  {
    number: "05",
    title: "Flask",
    description: "Backend Development",
  },
  {
    number: "06",
    title: "Next.js",
    description: "Modern Web Development",
  },
  {
    number: "07",
    title: "Git & GitHub",
    description: "Version Control",
  },
  {
    number: "08",
    title: "Web Security",
    description: "Vulnerability Assessment",
  },
];

const projects = [
  {
    number: "01",
    category: "CYBERSECURITY",
    title: "Web Vulnerability Scanner",
    description:
      "A Flask-based web security assessment tool that checks websites for common security configuration issues, HTTPS status and security headers.",
    tags: ["Python", "Flask", "Web Security"],
    link: "https://github.com/sonit-jangra/Web-Vulnerability-Finder",
  },
  {
    number: "02",
    category: "SECURITY NEWS",
    title: "CyberPulse",
    description:
      "A cybersecurity news dashboard that collects and displays cybersecurity-focused news using live RSS feeds.",
    tags: ["Next.js", "JavaScript", "RSS"],
    link: "https://github.com/sonit-jangra/Cybersecurity-News",
  },
  {
    number: "03",
    category: "AI + SECURITY",
    title: "AI Phishing Detector",
    description:
      "A Python and Flask application designed to analyze email content and identify potential phishing messages using machine learning.",
    tags: ["Python", "Flask", "Machine Learning"],
    link: "#",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <span>&lt;</span>
            SONIT
            <span>/&gt;</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <nav className={`nav-links ${menuOpen ? "show" : ""}`}>

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a href="/CV.pdf" download className="nav-cv">
              DOWNLOAD CV
            </a>

          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-grid"></div>

        <div className="hero-container">

          <div className="hero-left">

            <div className="online-status">
              <span></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hero-label">
              CYBERSECURITY PORTFOLIO
            </p>

            <h1>
              SONIT
              <br />
              <span>JANGRA</span>
            </h1>

            <h2>
              Cybersecurity Enthusiast
              <b> & </b>
              Developer
            </h2>

            <p className="hero-description">
              I build security-focused applications and explore
              cybersecurity, ethical hacking, web security,
              Python and modern web development.
            </p>

            <div className="hero-actions">

              <a href="#projects" className="primary-button">
                VIEW PROJECTS
                <span>→</span>
              </a>

              <a
                href="/CV.pdf"
                download
                className="outline-button"
              >
                DOWNLOAD CV
              </a>

            </div>

            <div className="social-row">

              <a
                href="https://github.com/sonit-jangra"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN ↗
              </a>

              <a href="mailto:sonitsilk001@gmail.com">
                EMAIL ↗
              </a>

            </div>

          </div>


          {/* TERMINAL */}

          <div className="terminal-card">

            <div className="terminal-header">

              <div className="terminal-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              

              <span className="terminal-online">
                ● ONLINE
              </span>

            </div>



          </div> 

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="dashboard-section" id="about">

        <div className="section-title">
          <span>01 /</span>
          <h2>ABOUT ME</h2>
        </div>

        <div className="about-layout">

          <div className="large-card about-main">

            <div className="card-top">
              <span>PROFILE</span>
              <span>01</span>
            </div>

            <h3>
              Building security.
              <br />
              Learning continuously.
            </h3>

            <p>
              I am a cybersecurity enthusiast and developer
              interested in ethical hacking, web security,
              Python, Linux.
            </p>

            <p>
              I enjoy creating practical projects that solve
              real problems and help me understand how
              applications can be protected against security
              threats.
            </p>

            <p>
              My current learning path focuses on cybersecurity,
              ethical hacking, Python, Kali Linux, web
              vulnerability assessment and modern web
              development.
            </p>

          </div>


          <div className="side-cards">

            <div className="info-card">
              <span>FOCUS</span>
              <strong>CYBERSECURITY</strong>
            </div>

            <div className="info-card">
              <span>INTEREST</span>
              <strong>ETHICAL HACKING</strong>
            </div>

            <div className="info-card">
              <span>BUILDING WITH</span>
              <strong>PYTHON + NEXT.JS</strong>
            </div>

            <div className="info-card">
              <span>LOCATION</span>
              <strong>INDIA</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="dashboard-section" id="skills">

        <div className="section-title">
          <span>02 /</span>
          <h2>TECHNICAL SKILLS</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.number}>

              <div className="skill-number">
                {skill.number}
              </div>

              <div className="skill-content">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>

              <div className="skill-arrow">
                →
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="dashboard-section" id="projects">

        <div className="section-title">
          <span>03 /</span>
          <h2>FEATURED PROJECTS</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              <div className="project-icon">
                {"</>"}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tags">

                {project.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                VIEW PROJECT
                <span>↗</span>
              </a>

            </article>
          ))}

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        className="dashboard-section"
        id="education"
      >

        <div className="section-title">
          <span>04 /</span>
          <h2>EDUCATION & LEARNING</h2>
        </div>

        <div className="education-card">

          <div className="education-main">

            <span className="education-label">
              CURRENT LEARNING PATH
            </span>

            <h3>
              Cybersecurity
            </h3>

            <p>
              Developing practical knowledge in cybersecurity,
              ethical hacking, Linux, Python, web security and
              vulnerability assessment.
            </p>

          </div>

          <div className="learning-list">

            <div className="learning-item">
              <span>01</span>
              <strong>Cybersecurity</strong>
            </div>

            <div className="learning-item">
              <span>02</span>
              <strong>Ethical Hacking</strong>
            </div>

            <div className="learning-item">
              <span>03</span>
              <strong>Kali Linux</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="dashboard-section contact-section"
        id="contact"
      >

        <div className="section-title">
          <span>05 /</span>
          <h2>CONTACT</h2>
        </div>

        <div className="contact-card">

          <div>

            <span className="contact-label">
              LET&apos;S CONNECT
            </span>

            <h3>
              Have a project
              <br />
              in mind?
            </h3>

            <p>
              I am interested in cybersecurity projects,
              collaborations, internships and opportunities
              where I can learn and contribute.
            </p>

          </div>

          <div className="contact-links">

            <a href="mailto:sonitjangra001@gmail.com">
              <span>EMAIL</span>
              sonitjangra001@gmail.com
              <b>↗</b>
            </a>

            <a
              href="https://github.com/sonit-jangra"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              github.com/sonit-jangra
              <b>↗</b>
            </a>

            <a
              href="https://www.linkedin.com/in/sonit-jangra-323a2b419/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8Vui7tsRS2Wr5k8u%2ByhDTA%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <span>LINKEDIN</span>
              LinkedIn Profile
              <b>↗</b>
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}
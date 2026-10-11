const projects = [
  {
    number: "01",
    name: "Web Vulnerability Finder",
    type: "Web application security",
    description:
      "A cybersecurity project focused on finding common web application vulnerabilities and making findings easier to review.",
    tags: ["WEB SECURITY", "ETHICAL HACKING"],
    className: "art-recon",
    visual: (
      <div className="terminal-card">
        <div className="terminal-top"><span /><span /><span /><b>vulnerability-finder</b></div>
        <p className="terminal-comment"># web security project</p>
        <p><i>$</i> scan --target authorized-lab</p>
        <span className="terminal-result"><b>01</b> target in scope</span>
        <span className="terminal-result"><b>02</b> review findings</span>
        <span className="terminal-result"><b>OK</b> report ready</span>
        <p className="terminal-prompt"><i>$</i> <span /></p>
      </div>
    ),
  },
  {
    number: "02",
    name: "Cybersecurity News",
    type: "Keeping up with security",
    description:
      "A project for collecting and exploring cybersecurity news, making it easier to follow security stories and emerging topics.",
    tags: ["CYBERSECURITY", "NEWS"],
    className: "art-logwatch",
    visual: (
      <div className="news-card">
        <div className="news-card-top"><span>SECURITY BRIEF</span><span className="live-indicator">● NEWS DESK</span></div>
        <p className="news-date">THE LATEST IN CYBERSECURITY</p>
        <article className="news-story">
          <span className="news-category">THREAT INTELLIGENCE</span>
          <b>Understanding the<br />evolving threat landscape</b>
          <span className="news-meta">5 MIN READ <i>↗</i></span>
        </article>
        <article className="news-story news-story-secondary">
          <span className="news-category">CLOUD SECURITY</span>
          <b>Security notes from<br />across the cloud</b>
          <span className="news-meta">3 MIN READ <i>↗</i></span>
        </article>
      </div>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.5 15.5 15 5m0 0H6m9 0v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" className="shield-icon" viewBox="0 0 48 54" fill="none">
      <path d="M24 3 43 10v13c0 12.1-7.5 22.8-19 28C12.5 45.8 5 35.1 5 23V10L24 3Z" />
      <path d="m16 26 5.5 5.5L33 20" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a aria-label="Sonit, home" className="wordmark" href="#home">sonit<span>_</span></a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#skills">Skills</a>
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Let&apos;s connect <ArrowIcon /></a>
        </nav>
      </header>

      <section aria-labelledby="hero-title" className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> CYBERSECURITY ENTHUSIAST · ALWAYS LEARNING</p>
          <h1 id="hero-title">
            Hi, I&apos;m Sonit.
            <br />
            I look a little
            <br />
            <span className="accent-line">closer.</span>
          </h1>
          <p className="hero-intro">
            Curious about how systems break, how we protect them, and how
            security can make the internet a safer place for everyone.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my labs <span className="button-arrow">↓</span></a>
            <a className="text-link" href="#about">Get to know me <span>↗</span></a>
          </div>
          <div className="hero-focus">
            <span>FOCUS AREAS</span>
            <b>Ethical hacking</b><i /> <b>Web security</b><i /> <b>Cloud security</b>
          </div>
        </div>

        <div aria-label="A security monitoring dashboard showing a protected system" className="hero-art" role="img">
          <div className="dashboard">
            <div className="dashboard-top">
              <a className="dashboard-brand"><ShieldIcon /><span>NODE<span className="dashboard-brand-accent">/</span>SEC</span></a>
              <span className="dashboard-status"><i /> ALL SYSTEMS NOMINAL</span>
              <span className="dashboard-menu">•••</span>
            </div>
            <div className="dashboard-body">
              <p className="dashboard-label">SECURITY OVERVIEW <span>LIVE VIEW</span></p>
              <div className="dashboard-shield"><ShieldIcon /><span>✓</span></div>
              <p className="dashboard-title">Looking good.</p>
              <p className="dashboard-subtitle">Your sample environment is being monitored.</p>
              <div className="dashboard-metrics">
                <div><span>THREATS FOUND</span><b>00</b></div>
                <div><span>CHECKS PASSED</span><b>12<span>/12</span></b></div>
              </div>
              <div className="dashboard-activity">
                <span className="activity-dot" />
                <span>Last check <b>just now</b></span>
                <span className="activity-bar"><i /></span>
                <b className="activity-good">CLEAR</b>
              </div>
            </div>
          </div>
          <span className="hero-art-caption"><span className="availability-dot" /> LEARN · TEST · DOCUMENT</span>
          <span className="hero-art-index">FIG. 001 / DEFENSE IN DEPTH</span>
        </div>

        <a aria-label="Scroll to skills" className="scroll-cue" href="#skills"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section aria-labelledby="skills-title" className="skills-section section-wrap" id="skills">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TOOLS I USE · SKILLS I KEEP BUILDING</p>
            <h2 id="skills-title">My security <span className="accent-line">toolkit.</span></h2>
          </div>
          <p className="heading-note">Curiosity backed by practical<br />tools and continuous learning.</p>
        </div>
        <ul className="skills-grid">
          <li className="skill-card"><span className="skill-index">01</span><span className="skill-symbol">$_</span><span className="skill-name">Linux</span><span className="skill-kind">OPERATING SYSTEM</span></li>
          <li className="skill-card"><span className="skill-index">02</span><span className="skill-symbol">Py</span><span className="skill-name">Python</span><span className="skill-kind">PROGRAMMING</span></li>
          <li className="skill-card"><span className="skill-index">03</span><span className="skill-symbol">⌕</span><span className="skill-name">Burp Suite</span><span className="skill-kind">WEB SECURITY</span></li>
          <li className="skill-card"><span className="skill-index">04</span><span className="skill-symbol">≋</span><span className="skill-name">Wireshark</span><span className="skill-kind">NETWORK ANALYSIS</span></li>
          <li className="skill-card"><span className="skill-index">05</span><span className="skill-symbol">⌘</span><span className="skill-name">Ethical Hacking</span><span className="skill-kind">SECURITY PRACTICE</span></li>
          <li className="skill-card"><span className="skill-index">06</span><span className="skill-symbol">☁</span><span className="skill-name">Cloud Security</span><span className="skill-kind">CLOUD</span></li>
        </ul>
      </section>

      <section aria-labelledby="work-title" className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJECTS · BUILDING THROUGH PRACTICE</p>
            <h2 id="work-title">Selected <span className="accent-line">projects.</span></h2>
          </div>
          <p className="heading-note">Cybersecurity tools and ideas,<br />made for a safer internet.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.className}`}>
                <span className="project-number">PROJECT / {project.number}</span>
                {project.visual}
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <div aria-label="Project disciplines" className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="concept-note">I only test systems I own or have explicit permission to assess.</p>
      </section>

      <section aria-labelledby="about-title" className="about-section" id="about">
        <div className="about-inner section-wrap">
          <div className="about-stamp" aria-label="Think ethically. Test with permission.">
            <span>THINK ETHICALLY</span>
            <span className="stamp-shield"><ShieldIcon /></span>
            <span>TEST WITH PERMISSION</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2 id="about-title">Curiosity, with<br /><span className="accent-line">a purpose.</span></h2>
            <p>
              I&apos;m Sonit, a cybersecurity enthusiast building my skills one
              careful experiment at a time. I enjoy understanding how web
              technologies work and spotting ways they can be made safer.
            </p>
            <p>
              My approach is grounded in curiosity, clear documentation, and
              respect for the people behind the systems. I practice in legal,
              controlled environments and keep learning every day.
            </p>
            <a className="text-link about-link" href="#contact">Let&apos;s talk security <span>↗</span></a>
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-title" className="contact-section section-wrap" id="contact">
        <div>
          <p className="eyebrow">COLLABORATION, QUESTIONS, GOOD CONVERSATIONS</p>
          <h2 id="contact-title">Let&apos;s build<br /><span className="accent-line">safer systems.</span></h2>
        </div>
        <div className="contact-aside">
          <p>Have a cybersecurity opportunity, a project idea, or something interesting to share? I&apos;d love to connect.</p>
          <a className="button button-primary" href="https://linkedin.com/in/sonit-jangra-323a2b419/" rel="noreferrer" target="_blank">Connect on LinkedIn <ArrowIcon /></a>
          <div aria-label="Social profiles" className="social-links">
            <a href="https://linkedin.com/in/sonit-jangra-323a2b419/" rel="noreferrer" target="_blank">LinkedIn <ArrowIcon /></a>
            <a href="https://github.com/sonit-jangra/" rel="noreferrer" target="_blank">GitHub <ArrowIcon /></a>
          </div>
        </div>
        <span aria-hidden="true" className="contact-decoration"><ShieldIcon /></span>
      </section>

      <footer className="site-footer section-wrap">
        <a aria-label="Sonit, back to top" className="wordmark" href="#home">sonit<span>_</span></a>
        <div aria-label="Social profiles" className="footer-socials">
          <a href="https://linkedin.com/in/sonit-jangra-323a2b419/" rel="noreferrer" target="_blank">LINKEDIN ↗</a>
          <a href="https://github.com/sonit-jangra/" rel="noreferrer" target="_blank">GITHUB ↗</a>
          <a href="mailto:sonitsilk@gmail.com"> mail me = sonitsilk001@gmail.com</a>
        </div>
        <a className="back-to-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

"use client";

import { useEffect } from "react";

export default function Home() {
  const skills = [
    "Python", "React.js", "Django", "Node.js", "Supabase",
    "Tailwind CSS", "Scikit-learn", "Multi-Agent AI", "Agile (Scrum)", "Prompt Engineering"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 50) navbar?.classList.add("scrolled");
      else navbar?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar" id="navbar">
        <div className="navbar-logo">
          Aditya Doshi
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        <div className="hero-illustration">
          <img
            src="/hero-illustration.png"
            alt="Aditya Doshi - Developer at work"
          />
        </div>

        <div className="hero-content">
          <div className="hero-portfolio-text">
            <span>port</span>
            <span>folio</span>
          </div>
          <p className="hero-name-line">
            <strong>Aditya Doshi</strong> | Full-Stack Developer &amp; ML Engineer
          </p>
          <p className="hero-desc">
            I&apos;m a CS undergrad at PDEU building production-grade web apps,
            multi-agent AI systems, and ML pipelines. I turn complex problems into
            fast, accessible, and high-converting web experiences.
          </p>
          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">
              View My Work &darr;
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Connect
            </a>
          </div>
        </div>

      </section>

      {/* ===== SEAMLESS FADE ===== */}
      <div className="section-fade"></div>

      {/* ===== SKILLS STRIP ===== */}
      <div className="skills-strip">
        <div className="skills-container">
          {skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="section-fade-reverse"></div>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section" id="about">
        <p className="section-label reveal">About Me</p>
        <h2 className="section-title reveal">What I bring to the table</h2>
        <div className="about-grid">
          <div className="about-card reveal reveal-delay-1">
            <h3>Full-Stack Development</h3>
            <p>
              I build scalable, production-ready web apps using React, Node.js, and Django.
              I focus on atomic DB transactions and secure architectures so your site never breaks under load.
            </p>
          </div>
          <div className="about-card reveal reveal-delay-2">
            <h3>Machine Learning &amp; AI</h3>
            <p>
              From Scikit-learn classification models to multi-agent LLM systems, I engineer
              intelligent features that solve real problems with deterministic, clean output.
            </p>
          </div>
          <div className="about-card reveal reveal-delay-3">
            <h3>Accessibility &amp; UX</h3>
            <p>
              I don&apos;t just write code; I craft inclusive experiences. I build to 100% WCAG
              accessibility compliance, ensuring your application is usable by everyone.
            </p>
          </div>
          <div className="about-card reveal reveal-delay-4">
            <h3>Agile Leadership</h3>
            <p>
              As a certified Scrum Master and Design Head, I lead cross-functional teams,
              manage sprint planning, and guarantee that all milestones are delivered on schedule.
            </p>
          </div>
        </div>
      </section>

      <div className="section-fade"></div>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="projects-section" id="projects">
        <p className="section-label reveal">My Work</p>
        <h2 className="section-title reveal">Featured Projects</h2>

        <div className="projects-grid">
          <div className="project-card reveal">
            <div className="project-preview">
              <img src="/project-1.png" alt="Shree Parshwa Ayurveda Website" className="project-photo" />
            </div>
            <div className="project-info">
              <div className="project-number">01</div>
              <h3 className="project-name">Shree Parshwa Ayurveda</h3>
              <p className="project-desc">
                A full-stack e-commerce and clinic management platform. Features a Node.js/Supabase backend,
                Razorpay payment integration, and atomic database locking to prevent inventory overselling.
                Achieved 100% WCAG accessibility compliance.
              </p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Supabase</span>
                <span className="project-tag">Razorpay</span>
              </div>
              <a
                href="https://shree-parshwa-ayurveda.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Live Site &rarr;
              </a>
            </div>
          </div>

          <div className="project-card reveal">
            <div className="project-preview">
              <img src="/project-2.png" alt="TalentMesh AI Recruiting System" className="project-photo" />
            </div>
            <div className="project-info">
              <div className="project-number">02</div>
              <h3 className="project-name">TalentMesh</h3>
              <p className="project-desc">
                A high-concurrency Multi-Agent AI recruiting system built during a DA-IICT Hackathon.
                It uses a Python/Django async backend to parse, score, and rank 200+ resumes simultaneously
                using strict prompt engineering and a Synonym Intelligence Graph.
              </p>
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">Django</span>
                <span className="project-tag">LLMs</span>
                <span className="project-tag">Multi-Agent AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-fade"></div>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section" id="contact">
        <p className="section-label reveal">Get In Touch</p>
        <h2 className="section-title reveal">
          Have a project in mind? Let&apos;s make it happen.
        </h2>
        <p className="contact-desc reveal">
          I&apos;m available for freelance projects, collaborations, and
          partnership opportunities. Let&apos;s build something great.
        </p>
        <div className="contact-links reveal">
          <a href="mailto:adityadoshi2006@gmail.com" className="contact-pill">
            adityadoshi2006@gmail.com
          </a>
          <a
            href="https://github.com/AdityaDoshi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aditya-doshi-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/aditya1_40/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill"
          >
            Instagram
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>
          Built by Aditya Doshi &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}

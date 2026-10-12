
"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Amazon UI",
    category: "FRONTEND EXPERIENCE",
    type: "shop",
    status: "UI PROJECT",
    description:
      "A shopping-interface project focused on product presentation, familiar e-commerce patterns, and responsive layouts.",
    details:
      "The aim is to practise building clear product interfaces and responsive layouts with frontend fundamentals. This is a UI project, not a claim of a production shopping platform.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://ruqayya-amazon-clone.netlify.app/",
  },
  {
    number: "02",
    title: "Rock Paper Scissors",
    category: "INTERACTIVE WEB",
    type: "game",
    status: "GAME PROJECT",
    description:
      "A browser game that brings a familiar challenge to life through interactive choices and game logic.",
    details:
      "This project explores JavaScript event handling, conditional logic, score updates, and the small interactions that make a simple game engaging.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://ruqayya-rock-paper-scissors-game.netlify.app/",
  },
  {
    number: "03",
    title: "FreelanceOS",
    category: "ANDROID APPLICATION",
    type: "dashboard",
    status: "APP PROJECT",
    description:
      "A freelancer project-management app with client and project workflows, built around an Android and Firebase stack.",
    details:
      "The project has included authentication, client management, project creation, editing, deletion, and project details backed by Firebase. It is an ongoing app-development project.",
    stack: ["Android", "Java/Kotlin", "Firebase"],
    url: "",
  },
  {
    number: "04",
    title: "AppForge AI",
    category: "AI PRODUCT EXPERIMENT",
    type: "ai",
    status: "PROTOTYPE",
    description:
      "An experiment in building an AI-powered app generator with a React frontend and a Python backend.",
    details:
      "The prototype explores turning a written app idea into a generated result. It has used React, Vite, Flask, and model API integrations; the generation workflow is still experimental.",
    stack: ["React", "Python", "Flask", "AI APIs"],
    url: "",
  },
];

const skills = [
  { name: "HTML & CSS", detail: "Structure, styling, responsive layouts" },
  { name: "JavaScript", detail: "Interactive browser experiences" },
  { name: "React / Next.js", detail: "Component-based web development" },
  { name: "Java & C", detail: "Programming fundamentals" },
  { name: "Android & Firebase", detail: "Application and data workflows" },
  { name: "Python & Flask", detail: "Backend and AI experiments" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  function moveProjects(direction: number) {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector<HTMLElement>(".project-card");
    const gap = 24;
    const distance = card ? card.offsetWidth + gap : slider.clientWidth * 0.8;

    slider.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ruqayya home">
          <span className="brand-mark">R.</span>
          <span className="brand-name">RUQAYYA<span className="brand-dot">.DEV</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`site-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>Selected work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#skills" onClick={closeMenu}>Toolkit <span>03</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.div
            className="availability"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="availability-dot" />
            <span>DEVELOPER · CREATIVE THINKER</span>
          </motion.div>

          <motion.p
            className="hero-overline"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            CODE MEETS CURIOSITY
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
          >
            Turning ideas
            <br />
            into <span className="gradient-text">experiences.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease }}
          >
            I&apos;m Ruqayya — a developer exploring the space between
            thoughtful design, interactive websites, and useful technology.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease }}
          >
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-ghost" href="#about">
              A little about me <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-footnote"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            <span className="footnote-line" />
            <span>DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1.1, ease }}
          aria-label="Original abstract artwork featuring a glowing metallic sphere"
          role="img"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />

          <div className="art-glow" />
          <div className="chrome-sphere">
            <div className="sphere-highlight" />
            <div className="sphere-shadow" />
          </div>

          <div className="art-crosshair crosshair-one" />
          <div className="art-crosshair crosshair-two" />

          <div className="art-label art-label-top">
            <span className="label-index">FIG. 001</span>
            <span>CREATIVE ENERGY</span>
          </div>

          <div className="art-label art-label-bottom">
            <span className="label-live"><span /> LIVE IDEAS</span>
            <span>01 / INFINITE POSSIBILITIES</span>
          </div>

          <span className="spark spark-a" />
          <span className="spark spark-b" />
          <span className="spark spark-c" />
          <span className="spark spark-d" />
          <span className="spark spark-e" />
          <span className="spark spark-f" />

          <div className="floating-note note-code">
            <span className="note-symbol">&lt;/&gt;</span>
            <span>creative code</span>
          </div>
          <div className="floating-note note-motion">
            <span className="note-star">✳</span>
            <span>motion &amp; detail</span>
          </div>
        </motion.div>

        <div className="hero-index" aria-hidden="true">
          <span>PORTFOLIO</span>
          <span>2026 — PRESENT</span>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of interest">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="ticker-group" key={index} aria-hidden={index === 1}>
              <span>FRONTEND DEVELOPMENT</span><i>✳</i>
              <span>CREATIVE TECHNOLOGY</span><i>✳</i>
              <span>INTERACTIVE EXPERIENCES</span><i>✳</i>
              <span>IDEAS INTO INTERFACES</span><i>✳</i>
              <span>ALWAYS EXPLORING</span><i>✳</i>
            </div>
          ))}
        </div>
      </div>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <p className="section-kicker"><span>01</span> / SELECTED WORK</p>
            <h2 id="work-title">Curiosity, <span className="gradient-text">made tangible.</span></h2>
            <p className="section-intro">
              A collection of things I&apos;ve built, explored, and learned from.
              Each project is a step forward.
            </p>
          </div>
          <div className="slider-controls" aria-label="Project gallery controls">
            <button type="button" onClick={() => moveProjects(-1)} aria-label="Scroll to previous projects">
              ←
            </button>
            <button type="button" onClick={() => moveProjects(1)} aria-label="Scroll to next projects">
              →
            </button>
          </div>
        </motion.div>

        <div className="project-slider" ref={sliderRef} aria-label="Project gallery">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card project-${project.type}`}
              key={project.number}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.09, duration: 0.65, ease }}
            >
              <div className={`project-visual visual-${project.type}`} aria-hidden="true">
                <div className="visual-topline">
                  <span>{project.category}</span>
                  <span>{project.number} / 04</span>
                </div>

                {project.type === "shop" && (
                  <div className="shop-art">
                    <div className="shop-orb" />
                    <div className="shop-window">
                      <div className="window-dots"><i /><i /><i /></div>
                      <div className="shop-line wide" />
                      <div className="shop-line medium" />
                      <div className="shop-products">
                        <span /><span /><span />
                      </div>
                      <div className="shop-line short" />
                    </div>
                    <span className="visual-caption">THE ART OF DISCOVERY</span>
                  </div>
                )}

                {project.type === "game" && (
                  <div className="game-art">
                    <div className="game-glow" />
                    <div className="game-tile tile-rock">✊</div>
                    <div className="game-tile tile-paper">✋</div>
                    <div className="game-tile tile-scissors">✌</div>
                    <span className="game-vs">VS.</span>
                    <span className="visual-caption">CHOOSE YOUR MOVE</span>
                  </div>
                )}

                {project.type === "dashboard" && (
                  <div className="dashboard-art">
                    <div className="dashboard-window">
                      <div className="dashboard-sidebar">
                        <span className="sidebar-logo">F.</span>
                        <i /><i /><i /><i />
                      </div>
                      <div className="dashboard-main">
                        <div className="dashboard-heading">Your workspace<span /></div>
                        <div className="dashboard-stats">
                          <div /><div /><div />
                        </div>
                        <div className="dashboard-chart">
                          <span /><span /><span /><span /><span /><span /><span />
                        </div>
                        <div className="dashboard-bottom"><i /><i /><i /></div>
                      </div>
                    </div>
                    <span className="visual-caption">LESS CHAOS. MORE CLARITY.</span>
                  </div>
                )}

                {project.type === "ai" && (
                  <div className="ai-art">
                    <div className="ai-ring ring-one" />
                    <div className="ai-ring ring-two" />
                    <div className="ai-ring ring-three" />
                    <div className="ai-core"><span>✳</span></div>
                    <div className="ai-prompt">
                      <span>YOUR IDEA</span>
                      <i />
                      <i />
                      <i />
                    </div>
                    <span className="visual-caption">IDEA → EXPERIMENT</span>
                  </div>
                )}

                <span className="visual-status">{project.status}</span>
              </div>

              <div className="project-body">
                <div className="project-title-row">
                  <div>
                    <p className="project-number">PROJECT {project.number}</p>
                    <h3>{project.title}</h3>
                  </div>
                  {project.url ? (
                    <a
                      className="project-arrow"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} in a new tab`}
                    >
                      ↗
                    </a>
                  ) : (
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags" aria-label="Technologies used">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>

                <button
                  className="project-details-button"
                  type="button"
                  aria-expanded={expandedProject === index}
                  aria-controls={`project-details-${project.number}`}
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                >
                  {expandedProject === index ? "Close project notes" : "Explore project"}
                  <span aria-hidden="true">{expandedProject === index ? "−" : "+"}</span>
                </button>

                <div
                  className="project-details"
                  id={`project-details-${project.number}`}
                  hidden={expandedProject !== index}
                >
                  <p>{project.details}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="gallery-footer">
          <span>FOUR PROJECTS. MANY LESSONS.</span>
          <span>SCROLL TO EXPLORE <b>→</b></span>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <motion.div
          className="about-layout"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="about-visual" aria-hidden="true">
            <div className="about-grid-lines" />
            <div className="about-orbit orbit-a" />
            <div className="about-orbit orbit-b" />
            <div className="about-monogram">R<span>.</span></div>
            <span className="about-coordinate coordinate-a">17° / CURIOUS</span>
            <span className="about-coordinate coordinate-b">ALWAYS IN PROGRESS</span>
            <span className="spark about-spark-one" />
            <span className="spark about-spark-two" />
            <span className="spark about-spark-three" />
          </div>

          <div className="about-copy">
            <p className="section-kicker"><span>02</span> / A LITTLE ABOUT ME</p>
            <h2 id="about-title">Still learning.<br /><span className="gradient-text">Always building.</span></h2>
            <p>
              I enjoy taking an idea and turning it into something people can
              interact with. My interests span frontend development, application
              building, and experiments with AI.
            </p>
            <p>
              I believe good work comes from curiosity, careful iteration, and
              the willingness to learn something new when a challenge appears.
              I&apos;m building my skills one project at a time.
            </p>
            <a className="text-link" href="#skills">
              The tools I&apos;m exploring <span aria-hidden="true">↘</span>
            </a>
          </div>
        </motion.div>
      </section>

      <section className="skills-section" id="skills" aria-labelledby="skills-title">
        <motion.div
          className="section-heading skills-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <p className="section-kicker"><span>03</span> / MY TOOLKIT</p>
            <h2 id="skills-title">Built on fundamentals.<br /><span className="gradient-text">Open to what&apos;s next.</span></h2>
            <p className="section-intro">
              Technologies I&apos;ve worked with across my projects and experiments.
            </p>
          </div>
          <span className="toolkit-stamp" aria-hidden="true">LEARN<br />BUILD<br />REPEAT<span>✳</span></span>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.article
              className="skill-card"
              key={skill.name}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07, duration: 0.5, ease }}
            >
              <span className="skill-index">0{index + 1}</span>
              <span className="skill-star" aria-hidden="true">✳</span>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
              <div className="skill-card-line" />
            </motion.article>
          ))}
        </div>

        <p className="skills-note">
          A growing toolkit — not a claim to know everything in the stack.
        </p>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-backdrop" aria-hidden="true">
          <div className="contact-orbit contact-orbit-one" />
          <div className="contact-orbit contact-orbit-two" />
          <span className="spark contact-spark-one" />
          <span className="spark contact-spark-two" />
          <span className="spark contact-spark-three" />
        </div>

        <motion.div
          className="contact-content"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="section-kicker"><span>04</span> / YOUR TURN</p>
          <p className="contact-eyebrow">HAVE AN IDEA IN MIND?</p>
          <h2 id="contact-title">Let&apos;s make<br /><span className="gradient-text">something meaningful.</span></h2>
          <p className="contact-description">
            Have a project, an opportunity, or an interesting problem to solve?
            I&apos;d love to hear about it.
          </p>
          <a className="button button-primary contact-button" href="mailto:ruqayya.programmer@gmail.com">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-email-note">
            
          </p>
        </motion.div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">R<span>.</span></a>
        <p>DESIGNED WITH CURIOSITY · BUILT ONE STEP AT A TIME</p>
        <a className="back-to-top" href="#top">BACK TO TOP ↑</a>
        <span className="footer-year">© 2026</span>
      </footer>
    </main>
  );
}

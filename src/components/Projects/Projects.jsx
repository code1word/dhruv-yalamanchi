import React from "react";
import "./Projects.css";

// Load project images via Vite's import.meta.glob (bundles assets).
const _images = import.meta.glob("../../assets/Projects/*.{png,jpg,jpeg,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});
const imageMap = Object.fromEntries(
  Object.entries(_images).map(([path, url]) => [path.split("/").pop(), url])
);

export default function Projects(props) {
  const projects = [
    {
      title: "Exposure Explorer",
      description:
        "An educational, interactive web application designed to help users grasp the fundamentals of manual photography — including aperture, shutter speed, and ISO — through hands-on simulations, intuitive sliders, engaging quizzes, and practical cheat sheets.",
      technologies: "OpenCV, React, Flask, Bootstrap",
      github: "https://github.com/code1word/Exposure-Explorer",
      image: "Exposure Explorer Logo.png",
      website: "https://exposure-explorer.netlify.app/",
      featured: true,
    },
    {
      title: "Personal Portfolio",
      description:
        "The site you're viewing right now. A fully responsive personal portfolio website with email functionality that showcases some of my latest projects.",
      technologies: "React, Figma, EmailJS",
      github: "https://github.com/code1word/dhruv-yalamanchi",
      image: "DY Logo2.png",
      featured: true,
    },
    {
      title: "Columbia Forkcast",
      description:
        'A full-stack web application that aggregates real-time dining hall statuses and menus for Columbia University into a single dashboard. The app automatically scrapes and updates dining data, and supports AI-powered natural-language queries such as "What vegetarian options are currently available?"',
      technologies:
        "JavaScript, Bootstrap, Flask, BeautifulSoup, OpenAI API, SQLite, APScheduler",
      github: "https://github.com/code1word/Columbia-Forkcast",
      image: "Columbia Forkcast Logo.png",
      featured: true,
    },
    {
      title: "Dance Dance Revolution",
      description:
        "A recreation of Dance Dance Revolution on Arduino that prompts user input through joystick tilts and button presses, gradually becomes more difficult as the game progresses, plays music, and more!",
      technologies:
        "Arduino (C++), Adafruit RGB Matrix Library, LiquidCrystal Library",
      github: "https://github.com/code1word/DDR-Arduino-Game",
      image: "DDR Logo.png",
      featured: true,
    },
    {
      title: "Notflix",
      description:
        "A responsive Netflix clone built with React using the TMDB API for real-time movie data, featuring FireBase Authentication and Redux for user management, and a multi-tier subscription system powered by Stripe Checkout and Firestore.",
      technologies:
        "React, Redux, Cloud Firestore, Firebase Authentication, TMDB API, Stripe Checkout",
      github: "https://github.com/code1word/notflix",
      image: "Notflix Logo.png",
      featured: true,
    },
    {
      title: "HTTP Web Server",
      description:
        "A from-scratch HTTP/1.0 web server written in C using low-level socket programming, capable of serving static HTML and image files to up to 50 concurrent clients. The server robustly parses requests, handles invalid inputs, and interfaces with a backend service for database lookups.",
      technologies: "POSIX Sockets API (C), HTTP/1.0",
      github:
        "https://gist.github.com/code1word/49f78efc1657aa19bd9b4d8caff2cecb",
      image: "Web Server.png",
      featured: true,
    },
    {
      title: "Schmaker",
      description:
        "A convenient platform built to help NCSSM students plan their academic trimesters with confidence. The platform allows students to log in, generate possible meeting schedules, preview projected GPA outcomes, and automatically detect meeting pattern conflicts before registration.",
      technologies: "JavaScript, Flask, Bootstrap, SQL",
      github: "https://github.com/code1word/schmaker",
      demo: "https://www.youtube.com/watch?v=MNKOXxwGdDM",
      image: "Schmaker Logo.png",
      featured: true,
    },
    {
      title: "Nintendo Gamepedia",
      description:
        "A full-stack web application that lets users explore, search, and manage a growing database of Nintendo games through a clean, wiki-style browsing experience.",
      technologies: "Javascript, jQuery, Flask, Bootstrap",
      github: "https://github.com/code1word/nintendo-gamepedia",
      demo: "https://youtu.be/vn2SutTNRvQ",
      image: "Nintendo Gamepedia Logo.png",
      featured: false,
    },
    {
      title: "Personal Chatbot",
      description:
        "A machine-learning-powered conversational assistant that can intelligently answer questions about me. The chatbot is built using a custom feedforward neural network trained on curated intents and responses, and is deployed inside a responsive Flask web application.",
      technologies: "PyTorch, NLTK, NumPy, Flask",
      github: "https://github.com/code1word/dhruv-chatbot",
      image: "Chatbot Logo.png",
      featured: false,
    },
    {
      title: "2048",
      description:
        "A recreation of the classic sliding tile puzzle game. This version of 2048 features an easy-to-use GUI interface that was made using Tkinter.",
      technologies: "Tkinter, NumPy",
      github: "https://github.com/code1word/2048",
      image: "2048 Logo.png",
      featured: false,
    },
    {
      title: "2048 AI",
      description:
        "A program that intelligently plays the 2048 number game using a vanilla minimax algorithm, interacting with a web-based version of the game to play it live.",
      technologies: "Selenium, NumPy",
      github: "https://github.com/code1word/2048-AI",
      image: "2048 AI Logo.png",
      featured: false,
    },
    {
      title: "Cubic Spline Generator",
      description:
        "A tool that closely approximates a curve described by a mathematical function via a cubic spline interpolation, leveraging features of Qiskit along the way.",
      technologies: "Qiskit, Matplotlib, NumPy",
      github: "https://github.com/code1word/nc-qc-hackathon-summer-2020",
      image: "CSG Logo.png",
      featured: false,
    },
  ];

  return (
    <section className="projects-section" id={props.id || ""}>
      <div className="projects-container">
        <div className="screen-heading fade-in-scroll">
          <h2>Projects</h2>
        </div>

        <div className="featured-note fade-in-scroll">
          <div className="featured-icon" aria-label="Notable projects">
            <i className="fa fa-star featured-star" />
            <i className="fa fa-question-circle question-mark" />
          </div>

          <span className="featured-text">Notable Project</span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card glass-card fade-in-scroll ${
                project.featured ? "featured" : ""
              }`}
              key={index}
            >
              {project.featured && (
                <div className="featured-badge">
                  <i className="fa fa-star"></i>
                </div>
              )}

              <div className="project-image">
                <img
                  src={imageMap[project.image] || ""}
                  alt={project.title}
                  onError={(e) => {
                    // hide image on error
                    e.target.style.display = "none";
                  }}
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="project-tech">{project.technologies}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link site-link"
                        >
                          <i className="fa-solid fa-globe"></i>
                          <span>Visit Site</span>
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link demo-link"
                        >
                          <i className="fa fa-play-circle"></i>
                          <span>Watch Demo</span>
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link github-link"
                      >
                        <i className="fa-brands fa-github"></i>
                        <span>View GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

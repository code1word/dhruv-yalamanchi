import React from "react";
import "./Profile.css";
import ScrollService from "../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container fade-in-scroll">
      <div className="profile-content">
        {/* TEXT */}
        <div className="profile-text">
          <div className="greeting">
            <h1>
              Hello, I'm <span className="highlight">Dhruv</span>
            </h1>
          </div>

          <div className="role-container">
            <p className="role-text">I'm a</p>
            <div className="slider">
              <div className="slide-track">
                <span className="role software-engineer">
                  Software Engineer
                </span>
                <span className="role curious">Researcher</span>
                <span className="role enthusiast">Tech Enthusiast</span>
              </div>
            </div>
          </div>

          <p className="tagline">
            Columbia CS graduate and software engineer, passionate about AI,
            computer vision, and building things that matter.
          </p>

          {/* SOCIAL ICONS — MATCHING SAMPLE EFFECT */}
          <div className="social-links">
            <p className="social-text">You can find me here:</p>

            <div className="colz">
              <div className="one">
                <a href="mailto:dy2444@columbia.edu" aria-label="Email">
                  <i className="fa fa-envelope icon"></i>
                </a>
              </div>

              <div className="two">
                <a
                  href="https://www.linkedin.com/in/dhruvyalamanchi/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in icon"></i>
                </a>
              </div>

              <div className="three">
                <a
                  href="https://github.com/code1word"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github icon"></i>
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-buttons">
            <button
              className="btn btn-chat"
              onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
            >
              <span className="btn-text">Let's Chat</span>
            </button>

            <button
              className="btn btn-arrow"
              onClick={() => ScrollService.scrollHandler.scrollToProjects()}
            >
              <span className="btn-text">View Projects</span>
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="profile-image-container">
          <div className="profile-image">
            <div className="image-wrapper">
              <div className="profile-picture"></div>
            </div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-arrows">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

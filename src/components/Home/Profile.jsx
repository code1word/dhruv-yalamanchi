import React, { useState } from "react";
import "./Profile.css";
import ScrollService from "../../utilities/ScrollService";

export default function Profile() {
  const [revealed, setRevealed] = useState(false);
  const [summoning, setSummoning] = useState(false);

  const togglePersona = () => {
    // restart the one-shot burn animation each click
    setSummoning(false);
    requestAnimationFrame(() => setSummoning(true));
    setRevealed((r) => !r);
    setTimeout(() => setSummoning(false), 1300);
  };

  return (
    <div className="profile-container fade-in-scroll">
      {/* SVG turbulence filters that give the flame its intricate, licking edges */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="flameTurb">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.04"
              numOctaves="3"
              seed="3"
              result="n"
            >
              <animate
                attributeName="baseFrequency"
                dur="0.6s"
                values="0.018 0.04;0.03 0.06;0.018 0.04"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="n"
              scale="42"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="flameTurb2">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.024 0.05"
              numOctaves="3"
              seed="8"
              result="n"
            >
              <animate
                attributeName="seed"
                dur="0.5s"
                values="8;14;8"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="n"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="profile-content">
        {/* Profile text */}
        <div className="profile-text">
          <div className="greeting">
            <h1>
              Hello, I'm{" "}
              <span className="highlight">
                <span>D</span><span>H</span><span>R</span><span>U</span><span>V</span>
              </span>
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

          {/* Social links */}
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

          {/* Call-to-action */}
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

        {/* Image — click to burn-reveal the Persona portrait */}
        <div
          className={
            "profile-image-container" +
            (revealed ? " revealed" : "") +
            (summoning ? " summoning" : "")
          }
          onClick={togglePersona}
          role="button"
          tabIndex={0}
          aria-pressed={revealed}
          aria-label="Reveal Persona portrait"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              togglePersona();
            }
          }}
        >
          <div className="profile-image">
            <div className="image-wrapper">
              {/* persona layer sits UNDER the base and is uncovered as it burns */}
              <div className="profile-picture-persona"></div>
              <div className="profile-picture"></div>
              <div className="profile-flame"></div>
            </div>
            <div className="glow-effect"></div>
          </div>
          <span className="persona-hint">Tap</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-arrows">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
import React from "react";
import "./AboutMe.css";
import RansomHeading from "../RansomHeading";

export default function AboutMe(props) {
  const highlights = [
    {
      role: "Tau Beta Pi Member",
      detail: "Engineering Honors Society",
      icon: "fa-solid fa-star",
    },
    {
      role: "Teaching Assistant",
      detail: "Artificial Intelligence & Computer Vision",
      icon: "fa-solid fa-robot",
    },
    {
      role: "Student Researcher",
      detail: "Columbia Vision and Imaging Lab",
      icon: "fa-solid fa-camera-retro",
    },
    {
      role: "Software Engineer",
      detail: "Columbia BUILD Lab",
      icon: "fa-solid fa-code",
    },
  ];

  return (
    <section className="about-section" id={props.id || ""}>
      <div className="about-container">
        <div className="screen-heading fade-in-scroll">
          <RansomHeading>About Me</RansomHeading>
        </div>

        <div className="about-content fade-in-scroll">
          <div className="about-card glass-card">
            <div className="about-image" />

            <div className="about-details">
              <div className="about-text">
                <p>
                  I'm Dhruv, a software engineer at Bloomberg. I graduated with
                  highest honors from Columbia University, earning a B.S. in
                  computer science and applied math and an M.S. in computer
                  science. My interests sit at the intersection of applied AI,
                  computer vision, and large-scale software systems. Outside of
                  work, I enjoy going on walks, making origami, playing
                  open-world adventure games, and meeting new people!
                </p>
              </div>

              <div className="highlights-section">
                <h3 className="highlights-heading">
                  During my time at Columbia, I was a:
                </h3>

                <div className="highlights-grid">
                  {highlights.map((item, index) => (
                    <div className="highlight-item" key={index}>
                      <div className="highlight-num">
                        <span className="highlight-index">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="highlight-body">
                        <i className={`highlight-icon ${item.icon}`}></i>
                        <span className="highlight-role">{item.role}</span>
                        <span className="highlight-detail">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* end details */}
          </div>
        </div>
      </div>
    </section>
  );
}
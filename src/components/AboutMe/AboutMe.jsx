import React from "react";
import "./AboutMe.css";

export default function AboutMe(props) {
  const highlights = [
    {
      text: "Member of Tau Beta Pi Engineering Honors Society",
      icon: "fa-solid fa-award",
    },
    {
      text: "Teaching Assistant for Artificial Intelligence and Computer Vision",
      icon: "fa-solid fa-chalkboard-user",
    },
    {
      text: "Student Researcher at Columbia Vision and Imaging Lab",
      icon: "fa-solid fa-eye",
    },
  ];

  return (
    <section className="about-section" id={props.id || ""}>
      <div className="about-container">
        <div className="screen-heading fade-in-scroll">
          <h2>About Me</h2>
        </div>

        <div className="about-content fade-in-scroll">
          <div className="about-card glass-card">
            <div className="about-image" />

            <div className="about-details">
              <div className="about-text">
                <p>
                  I'm Dhruv, a ____. I graduated with highest honors from
                  Columbia University, earning a bachelor’s degree in computer
                  science and applied math and a master’s degree in computer
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
                      <div className="highlight-icon">
                        <i className={item.icon}></i>
                      </div>
                      <span>{item.text}</span>
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

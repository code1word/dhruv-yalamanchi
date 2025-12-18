import React, { useState } from "react";
import "./Resume.css";

// Dynamically import all SVGs/Images
const _assets = import.meta.glob("../../assets/Resume/*.{svg,png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const getAsset = (filename) => {
  for (const path in _assets) {
    if (path.includes(filename)) return _assets[path];
  }
  return null;
};

export default function Resume(props) {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education", icon: "fa-solid fa-user-graduate" },
    { id: "experience", label: "Experience", icon: "fa-solid fa-briefcase" },
    { id: "skills", label: "Skills", icon: "fa-solid fa-layer-group" },
  ];

  /* 💼 EXPERIENCE DATA 
     - logo: filename in assets/Resume
     - color: (Optional) Hex code to colorize an SVG. Remove to use original logo colors.
     - bg: (Optional) Background color for the logo box. Defaults to white.
  */
  const experienceData = [
    {
      company: "REDACTED",
      role: "Software Engineer",
      date: "Incoming", // or "July 2026 - Present"
      desc: "Joining as a full-time software engineer.",
      logo: "redacted.png",
    },
    {
      company: "Intuit",
      role: "Software Engineer Intern",
      date: "May 2025 - Aug 2025",
      desc: "Developed AI-driven compliance solutions using RAG systems and generative AI to automate policy recommendations and streamline onboarding workflows.",
      logo: "intuit.png",
    },
    {
      company: "United Airlines",
      role: "Software Engineer Intern",
      date: "May 2024 - Aug 2024",
      desc: "Built observability tools and analytics dashboards to improve API monitoring, reduce log analysis time, and track production issues efficiently.",
      logo: "unitedairlines.png",
      // color: "#0033A0",
      // bg: "#ffffff",
    },
    {
      company: "Columbia Build Lab",
      role: "Software Engineer",
      date: "Sep 2022 - May 2024",
      desc: "Partnered with founders to engineer full-stack MVPs, launching a travel platform adopted by 15+ hotels and prototyping a mobile app to connect non-English speakers with clinical trials.",
      logo: "buildlab.svg",
      bg: "#000000",
    },
    // {
    //   company: "Columbia Imaging and Vision Laboratory",
    //   role: "Student Researcher",
    //   date: "Aug 2024 - Present",
    //   desc: "Conducting research on computational imaging systems to optimize visual information capture for low-power machine vision applications.",
    //   logo: "columbia.jpeg", // Using JPEG, so no 'color' prop needed
    //   bg: "#ffffff",
    // },
    // {
    //   company: "Columbia University",
    //   role: "Teaching Assistant",
    //   date: "Sep 2023 - Present",
    //   desc: "Supporting graduate-level AI and Computer Vision courses by mentoring students through theoretical concepts and practical assignments.",
    //   logo: "columbia.jpeg",
    //   // Example: If you had a 'crown.svg' and wanted it Blue, you would uncomment this:
    //   // logo: "crown.svg",
    //   // color: "#04c3ff",
    //   bg: "#ffffff",
    // },
  ];

  /* 🎨 SKILLS DATA */
  const skillCategories = {
    languages: [
      { skill: "Python", img: "python.svg" },
      { skill: "Java", img: "java.svg" },
      { skill: "C", img: "c.svg" },
      { skill: "C++", img: "cplusplus.svg" },
      { skill: "SQL", img: "postgresql.svg" },
      { skill: "JavaScript", img: "javascript.svg" },
      { skill: "HTML5", img: "html5.svg" },
      { skill: "CSS3", img: "css.svg" },
      { skill: "R", img: "r.svg" },
    ],
    frameworks: [
      { skill: "Spring Boot", img: "springboot.png" },
      { skill: "React", img: "react.png" },
      { skill: "Node.js", img: "nodedotjs.png" },
      { skill: "PyTorch", img: "pytorch.png" },
      { skill: "Django", img: "django2.png" },
      { skill: "Flask", img: "flask.png", color: "#ffffff" },
      { skill: "Express", img: "express.png" },
      { skill: "React Native", img: "reactnative.png" },
      { skill: "Bootstrap", img: "bootstrap.png" },
      { skill: "Qiskit", img: "qiskit.png" },
    ],
    tools: [
      { skill: "AWS", img: "aws.svg", bg: "#ffffff" },
      { skill: "Git", img: "git.png" },
      { skill: "GraphQL", img: "graphql.png" },
      { skill: "MongoDB", img: "mongodb.svg" },
      { skill: "Datadog", img: "datadog.png", bg: "#ffffff" },
      { skill: "DynamoDB", img: "dynamodb.svg" },
      { skill: "GCP", img: "googlecloud.svg" },
      { skill: "Azure", img: "azure.svg" },
      { skill: "Postman", img: "postman.svg" },
      { skill: "Firebase", img: "firebase.svg" },
    ],
    libraries: [
      { skill: "NumPy", img: "numpy.svg" },
      { skill: "pandas", img: "pandas.svg", bg: "#ffffff" },
      { skill: "OpenCV", img: "opencv.svg" },
      { skill: "Redux", img: "redux.png" },
      { skill: "spaCy", img: "spacy.png" },
      { skill: "SciPy", img: "scipy.svg" },
      { skill: "Matplotlib", img: "matplotlib.svg" },
    ],
  };

  return (
    <section className="resume-section" id={props.id || ""}>
      <div className="resume-container">
        <div className="screen-heading fade-in-scroll">
          <h2>My Journey</h2>
        </div>

        <div className="resume-content fade-in-scroll">
          {/* LEFT SIDE: Navigation */}
          <div className="resume-card glass-card">
            <div className="resume-sidebar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                  <div className="tab-bg-hover"></div>
                </button>
              ))}
            </div>

            {/* RIGHT SIDE: Content */}
            <div className="resume-details">
              {/* --- EDUCATION TAB --- */}
              {activeTab === "education" && (
                <div className="content-panel fade-in">
                  <div className="education-layout">
                    <div className="edu-school-header">
                      <div className="school-logo">
                        <img
                          src={
                            getAsset("columbia.jpeg") ||
                            "https://via.placeholder.com/80"
                          }
                          alt="Columbia University"
                        />
                      </div>
                      <div className="school-info">
                        <h3>Columbia University</h3>
                        <span>New York, NY</span>
                      </div>
                    </div>

                    <div className="timeline-list">
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="timeline-header-row">
                            <h4>M.S. in Computer Science</h4>
                            <span className="date-badge">
                              Aug 2025 - May 2026
                            </span>
                          </div>
                          <p className="timeline-desc degree-sub">
                            Specialization in Vision, Graphics, and Interaction
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="timeline-header-row">
                            <h4>B.S. in Computer Science</h4>
                            <span className="date-badge">
                              Aug 2021 - May 2025
                            </span>
                          </div>
                          <p className="timeline-desc degree-sub">
                            Concentration in Intelligent Systems; Minor in
                            Applied Mathematics
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="coursework-section">
                      <h5>Relevant Coursework</h5>
                      <p>
                        Data Structures and Algorithms, Analysis of Algorithms,
                        Advanced Software Engineering, Systems Programming in C,
                        Deep Learning for Computer Vision, Computer Vision:
                        Learning & First Principles, Artificial Intelligence,
                        Natural Language Processing, Databases, Operating
                        Systems, Computational Imaging, Computer Networks,
                        Computer Graphics, Computational Aspects of Robotics,
                        Competitive Programming, Quantum Computing,
                        Human-Computer Interaction, User Interface Design
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* --- EXPERIENCE TAB --- */}
              {activeTab === "experience" && (
                <div className="content-panel fade-in">
                  <div className="timeline-list">
                    {experienceData.map((exp, index) => {
                      const logoUrl = getAsset(exp.logo);
                      return (
                        <div className="timeline-item" key={index}>
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <div className="timeline-flex">
                              {/* Logo Box with Color/BG Logic */}
                              <div
                                className="timeline-logo"
                                style={{
                                  backgroundColor: exp.bg || "#fff",
                                  "--icon-color": exp.color || null,
                                }}
                              >
                                {logoUrl ? (
                                  <img
                                    src={logoUrl}
                                    alt={exp.company}
                                    className={
                                      exp.color
                                        ? "icon-colored"
                                        : "icon-original"
                                    }
                                  />
                                ) : (
                                  <i
                                    className="fa-solid fa-building placeholder-icon"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                )}
                              </div>

                              <div className="timeline-info">
                                <div className="timeline-header-row">
                                  <h3>{exp.company}</h3>
                                  <span className="date-badge">{exp.date}</span>
                                </div>
                                <h4 className="role-title">{exp.role}</h4>
                                <p className="timeline-desc">{exp.desc}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* --- SKILLS TAB --- */}
              {activeTab === "skills" && (
                <div className="content-panel fade-in">
                  {[
                    { title: "Languages", data: skillCategories.languages },
                    { title: "Frameworks", data: skillCategories.frameworks },
                    { title: "Developer Tools", data: skillCategories.tools },
                    { title: "Libraries", data: skillCategories.libraries },
                  ].map((cat, i) => (
                    <React.Fragment key={i}>
                      <h5 className="skill-category-title">{cat.title}</h5>
                      <div className="skills-grid-container">
                        {cat.data.map((item, index) => {
                          const iconUrl = getAsset(item.img);
                          return (
                            <div className="skill-tile" key={index}>
                              <div
                                className="img-box"
                                style={{
                                  "--icon-color": item.color,
                                  backgroundColor: item.bg || "transparent",
                                  borderRadius: item.bg ? "8px" : "0",
                                  padding: item.bg ? "6px" : "0",
                                }}
                              >
                                {iconUrl ? (
                                  <img
                                    src={iconUrl}
                                    alt={item.skill}
                                    className={
                                      item.color
                                        ? "icon-colored"
                                        : "icon-original"
                                    }
                                  />
                                ) : (
                                  <i className="fa-solid fa-cube placeholder-icon"></i>
                                )}
                              </div>
                              <span className="skill-name">{item.skill}</span>
                            </div>
                          );
                        })}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

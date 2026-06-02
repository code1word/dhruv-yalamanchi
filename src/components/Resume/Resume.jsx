import React, { useState, useRef } from "react";
import "./Resume.css";
import RansomHeading from "../RansomHeading";

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
  const tabRefs = useRef([]);

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
      company: "Bloomberg",
      role: "Software Engineer",
      date: "July 2026 - Present",
      desc: "Working as a full-time software engineer.",
      logo: "bloomberg.jpeg",
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
  ];

  /* Skills data */
  const skillCategories = {
    languages: [
      { skill: "Python", img: "python.svg" },
      { skill: "TypeScript", img: "typescript.svg" },
      { skill: "JavaScript", img: "javascript.svg" },
      { skill: "SQL", img: "postgresql.svg" },
      { skill: "Java", img: "java.svg" },
      { skill: "C++", img: "cplusplus.svg" },
      { skill: "C", img: "c.svg" },
      { skill: "Bash", img: "bash.svg" },
      { skill: "HTML5", img: "html5.svg" },
      { skill: "CSS3", img: "css.svg" },
      { skill: "R", img: "R.svg" },
    ],
    frameworks: [
      { skill: "React", img: "react.png" },
      { skill: "Node.js", img: "nodedotjs.png" },
      { skill: "PyTorch", img: "pytorch.png" },
      { skill: "FastAPI", img: "fastapi.svg" },
      { skill: "Express", img: "express.png" },
      { skill: "Spring Boot", img: "springboot.png" },
      { skill: "Django", img: "django2.png" },
      { skill: "React Native", img: "reactnative.png" },
      { skill: "Flask", img: "flask.png", color: "#ffffff" },
      { skill: "Bootstrap", img: "bootstrap.png" },
      { skill: "Qiskit", img: "qiskit.png" },
    ],
    tools: [
      { skill: "Git", img: "git.png" },
      { skill: "Docker", img: "docker.svg" },
      { skill: "AWS", img: "aws.svg", bg: "#ffffff" },
      { skill: "GCP", img: "googlecloud.svg" },
      { skill: "Azure", img: "azure.svg" },
      { skill: "GraphQL", img: "graphql.png" },
      { skill: "MongoDB", img: "mongodb.svg" },
      { skill: "Figma", img: "figma.svg" },
      { skill: "Claude Code", img: "claudecode.svg" },
      { skill: "Datadog", img: "datadog.png", bg: "#ffffff" },
      { skill: "Firebase", img: "firebase.svg" },
      { skill: "Codex", img: "codex.svg" },
      { skill: "DynamoDB", img: "dynamodb.svg" },
      { skill: "Postman", img: "postman.svg" },
    ],
    libraries: [
      { skill: "pandas", img: "pandas.svg", bg: "#ffffff" },
      { skill: "NumPy", img: "numpy.svg" },
      { skill: "Hugging Face Transformers", img: "hugging-face.svg" },
      { skill: "scikit-learn", img: "scikit-learn.svg", bg: "#ffffff" },
      { skill: "OpenCV", img: "opencv.svg" },
      { skill: "Redux", img: "redux.png" },
      { skill: "SciPy", img: "scipy.svg" },
      { skill: "spaCy", img: "spacy.png" },
      { skill: "Matplotlib", img: "matplotlib.svg" },
    ],
  };

  const coursework = [
    "Data Structures and Algorithms",
    "Analysis of Algorithms",
    "Advanced Software Engineering",
    "Systems Programming in C",
    "Deep Learning for Computer Vision",
    "Computer Vision: First Principles",
    "Computer Vision: Learning",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Applied Deep Learning",
    "Databases",
    "Operating Systems",
    "Computational Imaging",
    "Computer Networks",
    "Computer Graphics",
    "Computational Aspects of Robotics",
    "Competitive Programming",
    "Quantum Computing",
    "Human-Computer Interaction",
    "User Interface Design",
    "Computer Science Theory"
  ];

  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  // Roving-focus keyboard navigation for the tablist (Arrow keys / Home / End)
  const onTabKeyDown = (e) => {
    let next = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      next = (activeIndex + 1) % tabs.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      next = (activeIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = tabs.length - 1;
    }
    if (next !== null) {
      e.preventDefault();
      setActiveTab(tabs[next].id);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section className="resume-section" id={props.id || ""}>
      <div className="resume-container">
        <div className="screen-heading fade-in-scroll">
          <RansomHeading>My Journey</RansomHeading>
        </div>

        <div className="resume-content fade-in-scroll">
          {/* Floating P5 menu (ARIA tablist) */}
          <div
            className="resume-nav"
            role="tablist"
            aria-label="Résumé sections"
            aria-orientation="vertical"
            onKeyDown={onTabKeyDown}
          >
              {tabs.map((tab, i) => {
                const selected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => (tabRefs.current[i] = el)}
                    id={`resume-tab-${tab.id}`}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`resume-panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    className={`tab-button ${selected ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="tab-meta">
                      <span className="tab-index">0{i + 1}</span>
                      <i className={tab.icon} aria-hidden="true"></i>
                    </span>
                    <span className="tab-label">{tab.label}</span>
                  </button>
                );
              })}
          </div>

          {/* Content card */}
          <div className="resume-card glass-card">
            <div className="resume-details">
              {/* Education tab */}
              {activeTab === "education" && (
                <div
                  className="content-panel fade-in"
                  role="tabpanel"
                  id="resume-panel-education"
                  aria-labelledby="resume-tab-education"
                  tabIndex={0}
                  key="education"
                >
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
                      <div className="timeline-item" style={{ "--i": 0 }}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="timeline-header-row">
                            <h4>M.S. in Computer Science</h4>
                            <span className="date-badge">
                              <span>Aug 2025 - May 2026</span>
                            </span>
                          </div>
                          <p className="timeline-desc degree-sub">
                            Specialization in Vision, Graphics, and Interaction
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item" style={{ "--i": 1 }}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="timeline-header-row">
                            <h4>B.S. in Computer Science</h4>
                            <span className="date-badge">
                              <span>Aug 2021 - May 2025</span>
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
                      <div className="coursework-tags">
                        {coursework.map((course, i) => (
                          <span
                            className="course-chip"
                            key={course}
                            style={{ "--i": i }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience tab */}
              {activeTab === "experience" && (
                <div
                  className="content-panel fade-in"
                  role="tabpanel"
                  id="resume-panel-experience"
                  aria-labelledby="resume-tab-experience"
                  tabIndex={0}
                  key="experience"
                >
                  <div className="timeline-list">
                    {experienceData.map((exp, index) => {
                      const logoUrl = getAsset(exp.logo);
                      return (
                        <div
                          className="timeline-item"
                          key={index}
                          style={{ "--i": index }}
                        >
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            <div className="timeline-flex">
                              {/* Logo box */}
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
                                  <span className="date-badge"><span>{exp.date}</span></span>
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

              {/* Skills tab */}
              {activeTab === "skills" && (
                <div
                  className="content-panel fade-in"
                  role="tabpanel"
                  id="resume-panel-skills"
                  aria-labelledby="resume-tab-skills"
                  tabIndex={0}
                  key="skills"
                >
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
                            <div
                              className="skill-tile"
                              key={index}
                              style={{ "--i": index }}
                            >
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
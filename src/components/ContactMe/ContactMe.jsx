import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./ContactMe.css";
import RansomHeading from "../RansomHeading";

export default function ContactMe(props) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const [values, setValues] = useState({ user_name: "", user_email: "", message: "" });
  const [errors, setErrors] = useState({});

  // simple, practical email check (RFC-perfect regex is overkill here)
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, raw) => {
    const value = (raw ?? "").trim();
    switch (name) {
      case "user_name":
        if (!value) return "Please enter your name.";
        if (value.length < 2) return "That name looks too short.";
        return "";
      case "user_email":
        if (!value) return "Please enter your email.";
        if (!EMAIL_RE.test(value)) return "Please enter a valid email address.";
        return "";
      case "message":
        if (!value) return "Please enter a message.";
        if (value.length < 10) return "Your message is a little short (10+ characters).";
        return "";
      default:
        return "";
    }
  };

  const validateAll = () => {
    const next = {};
    Object.keys(values).forEach((k) => {
      const msg = validateField(k, values[k]);
      if (msg) next[k] = msg;
    });
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // clear an existing error as soon as the field becomes valid again
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const doCopyEmail = () => {
    navigator.clipboard?.writeText("dy2444@columbia.edu").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    e.preventDefault();
    doCopyEmail();
  };

  // keep Enter/Space on the copy button from bubbling to the envelope toggle
  const handleCopyKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.stopPropagation();
      e.preventDefault();
      doCopyEmail();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // validate everything up front — block the send if anything's wrong
    const found = validateAll();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const firstBad = ["user_name", "user_email", "message"].find((k) => found[k]);
      formRef.current?.elements[firstBad]?.focus();
      toast.error("Please fix the highlighted fields.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
      setValues({ user_name: "", user_email: "", message: "" });
      setErrors({});
      setSent(true);
      setTimeout(() => setSent(false), 2600);
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error(err?.text || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id={props.id || ""}>
      <div className="contact-container">
        <div className="screen-heading fade-in-scroll">
          <RansomHeading>Get In Touch</RansomHeading>
        </div>

        <div className="contact-panel glass-card fade-in-scroll">
          {/* Left zone: intro collage */}
          <div className="contact-intro">
            <h3>Let’s Connect</h3>
            <p className="contact-description">
              Whether it’s a project, a role, or a question, my inbox is open —
              or reach me on any of the platforms below.
            </p>

            <div className="connect-collage">
              {/* social buttons — above the envelope */}
              <div className="socials-block">
                <div className="colz">
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
                  <div className="four">
                    <a
                      href="https://www.instagram.com/dhuv.y/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fa-brands fa-instagram icon"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* envelope — tap to reveal the email */}
              <div className={`envelope-block${mailOpen ? " is-open" : ""}`}>
                <div
                  className={`mail${mailOpen ? " is-open" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={mailOpen ? "Hide email address" : "Reveal email address"}
                  aria-pressed={mailOpen}
                  onClick={() => setMailOpen((o) => !o)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setMailOpen((o) => !o);
                    }
                  }}
                >
                  <div className="cover"></div>
                  <div className="letter">
                    <span className="letter-head">
                      <i className="fa-solid fa-envelope"></i> Or reach me at
                    </span>
                    <div className="mail-email-row">
                      <a
                        className="mail-email"
                        href="mailto:dy2444@columbia.edu"
                        onClick={(e) => e.stopPropagation()}
                      >
                        dy2444@columbia.edu
                      </a>
                      <button
                        type="button"
                        className={`copy-btn${copied ? " is-copied" : ""}`}
                        onClick={handleCopyEmail}
                        onKeyDown={handleCopyKeyDown}
                        aria-label={copied ? "Email copied" : "Copy email address"}
                      >
                        <i className="fa-regular fa-copy copy-icon"></i>
                        <i className="fa-solid fa-check check-icon"></i>
                      </button>
                    </div>
                  </div>
                  <div className="click-hint" aria-hidden="true">
                    <span className="hint-impact"></span>
                    <i className="fas fa-hand-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right zone: form */}
          <div className="contact-form-zone">
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="user_name">
                  Name <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  value={values.user_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  placeholder="Your name"
                  className={errors.user_name ? "has-error" : ""}
                  aria-invalid={errors.user_name ? "true" : "false"}
                  aria-describedby={errors.user_name ? "err_user_name" : undefined}
                />
                {errors.user_name && (
                  <span className="field-error" id="err_user_name" role="alert">
                    {errors.user_name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="user_email">
                  Email <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  value={values.user_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  placeholder="your.email@example.com"
                  className={errors.user_email ? "has-error" : ""}
                  aria-invalid={errors.user_email ? "true" : "false"}
                  aria-describedby={errors.user_email ? "err_user_email" : undefined}
                />
                {errors.user_email && (
                  <span className="field-error" id="err_user_email" role="alert">
                    {errors.user_email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me what you're thinking..."
                  className={errors.message ? "has-error" : ""}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "err_message" : undefined}
                />
                {errors.message && (
                  <span className="field-error" id="err_message" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* CTA — behaves like the hero "View Projects" / "Let's Chat" */}
              <button
                type="submit"
                className={`btn contact-btn${loading ? " is-sending" : ""}${sent ? " is-sent" : ""}`}
                disabled={loading || sent}
              >
                <span className="btn-text">
                  {sent ? "Message Sent!" : loading ? "Sending" : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Dhruv Yalamanchi</p>
        </footer>
      </div>
    </section>
  );
}
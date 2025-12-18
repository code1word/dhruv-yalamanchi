import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./ContactMe.css";

export default function ContactMe(props) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

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
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-content">
          {/* Left: info */}
          <div className="contact-info glass-card fade-in-scroll">
            <h3>Let’s Connect</h3>
            <p className="contact-description">
              Have an idea, question, or just want to say hi? I’m always open to
              interesting conversations and collaborations.
            </p>

            <div className="email-section">
              <p className="email-text">Or reach me directly here:</p>

              {/* Envelope animation */}
              <div className="mail">
                <div className="cover"></div>
                <div className="letter">
                  <h1>
                    <a href="mailto:dy2444@columbia.edu">dy2444@columbia.edu</a>
                  </h1>
                  <div class="click-hint">
                    <div class="hint-ripple"></div>
                    <i class="fas fa-hand-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-wrapper glass-card fade-in-scroll">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  Name <span className="required">*</span>
                </label>
                <input name="user_name" required placeholder="Your name" />
              </div>

              <div className="form-group">
                <label>
                  Email <span className="required">*</span>
                </label>
                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label>
                  Message <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me what you're thinking..."
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="btn btn-arrow contact-btn"
                disabled={loading}
              >
                <span className="btn-text">
                  {loading ? "Sending..." : "Send Message"}
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

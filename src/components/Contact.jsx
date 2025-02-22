import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">
          <Mail className="contact-icon" /> Contactez-moi
        </h2>
        <p className="contact-text">
          Vous souhaitez me contacter ? Envoyez-moi un email :
        </p>
        <a href="mailto:ljutvi.h@gmail.com" className="contact-email">
          ljutvi.h@gmail.com
        </a>
      </div>

      <div className="social-links">
        <a href="https://github.com/ljutvi31" target="_blank" rel="noopener noreferrer" className="social-icon github">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/ljutvi31" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <Linkedin />
        </a>
      </div>

      <p className="footer-note">© 2025 Ljutvi Harryum - Tous droits réservés.</p>
    </footer>
  );
};

export default Contact;

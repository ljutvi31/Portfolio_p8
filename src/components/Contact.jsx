import React from "react";
import { Mail, GitHub } from "lucide-react";
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
        <GitHub />
      </div>

      <p className="footer-note">
        © 2025 Ljutvi Harryum - Tous droits réservés.
      </p>
    </footer>
  );
};

export default Contact;

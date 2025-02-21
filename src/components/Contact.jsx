import React from "react";
import { Mail } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2><Mail /> Contactez-moi</h2>
      <p>Envoyez-moi un email à : <a href="mailto:ljutvi.h@gmail.com">ljutvi.h@gmail.com</a></p>
    </section>
  );
};

export default Contact;

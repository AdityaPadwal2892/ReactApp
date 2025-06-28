// Contact.js
import React from 'react';
import './Contact.css';

function Contact({ showModal, closeForm }) {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeForm}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeForm}>&times;</span>
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

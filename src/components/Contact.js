// Contact.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import './Contact.css';

function Contact({ showModal, closeForm }) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1sshgxd', 'template_e3qjp46', form.current, 'iT3j_yCALx2ru9FzX')
      .then((result) => {
          alert("Message sent successfully!");
          closeForm();
      }, (error) => {
          alert("Failed to send message. Try again later.");
      });
  };



  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeForm}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeForm}>&times;</span>
        <h2>Contact Us</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email"  name="user_email"  placeholder="Your Email" required />
          <textarea name="message"  placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

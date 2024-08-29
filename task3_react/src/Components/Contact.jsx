import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // Clear form fields if needed
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Now Start Your project</h2>
        <p>Fill up the form and our Team will get back to you within 24 hours.</p>
        <ul>
          <li>
            <i className="fas fa-phone"></i> +88012345678
          </li>
          <li>
            <i className="fas fa-envelope"></i> <a href="mailto:itagagency@gmail.com">itagagency@gmail.com</a>
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="itagagency@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>What service do you want?</label>
            <div className="service-options">
              <label>
                <input
                  type="radio"
                  name="service"
                  value="webflow"
                  checked={formData.service === 'webflow'}
                  onChange={handleChange}
                /> Webflow
              </label>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="uiux"
                  checked={formData.service === 'uiux'}
                  onChange={handleChange}
                /> UI/UX Design
              </label>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="seo"
                  checked={formData.service === 'seo'}
                  onChange={handleChange}
                /> SEO
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

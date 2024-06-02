import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';

export default function ContactForm() {
      const [formData, setFormData] = useState({
            name: '',
            surname: '',
            email: '',
            message: '',
      });

      const navigate = useNavigate();

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission logic here
            console.log(formData);
            navigate('/event-sign-up'); // Navigate to EventSignUp page
      };

      return (
            <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                        <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleChange}
                        />
                        <input
                              type="text"
                              name="surname"
                              placeholder="Surname"
                              value={formData.surname}
                              onChange={handleChange}
                        />
                  </div>
                  <div className="form-group">
                        <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                        />
                  </div>
                  <div className="form-group">
                        <textarea
                              name="message"
                              placeholder="Message"
                              value={formData.message}
                              onChange={handleChange}
                        ></textarea>
                  </div>
                  <button type="submit">Submit</button>
            </form>
      );
}
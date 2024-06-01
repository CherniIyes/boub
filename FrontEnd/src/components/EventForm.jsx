import React, { useState } from "react";
import "./EventForm.css";

export default function EventForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:kcherni411@gmail.com?subject=Volunteering Form Submission&body=${encodeURIComponent(
      `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;

    // Set submitted to true to show the thank you message
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div>Thank you for Volunteering!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              className="b"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Surname:
            <input
              className="b"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              className="b"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              className="b"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button className="button-89" type="submit">Submit</button>
        </form>

      )}

    </div>

  );
}
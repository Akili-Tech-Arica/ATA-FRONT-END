import React, { useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    // Email validation
    const isValidEmail = validateEmail(data.email);
    if (!isValidEmail) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
      console.log("Form data:", data);
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div id="contacts" className="container">
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="name">
          <div className="label_first">
            <label className="label" htmlFor="firstName" id="nameLabel">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="firstName"
              ref={firstNameRef}
            />
          </div>
          <div className="label_last">
            <label className="label" htmlFor="lastName">Last name:</label >
            <input
              type="text"
              id="lastName"
              className="lastName"
              ref={lastNameRef}
            />
          </div>
          <div className="label_email">
            <label className="label" htmlFor="email">Email:</label >
            <input
              type="email"
              name="email"
              id="email"
              className={`email ${emailError ? "error" : ""}`}
              placeholder="example@corp.com"
              ref={emailRef}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
        </div>

        <label className="label" htmlFor="message">Message:</label >
        <textarea
          placeholder="Start typing..."
          className="message"
          name="message"
          ref={messageRef}
        ></textarea>
        <button type="submit" className="send">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;

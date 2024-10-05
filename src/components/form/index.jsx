import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./form.css";

// Regex Validation from 'helpers.js'
import { validateEmail } from "../../utils/helpers";

function Form() {
  const [emailFrom, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "emailFrom") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "emailMessage") {
      setEmailMessage(inputValue);
    }
  };

  const handleBlur = () => {
    if (!validateEmail(emailFrom)) {
      setErrorMessage("Email is invalid");
      return;
    }
    setErrorMessage("");
    return;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!userName || !emailFrom) {
      setErrorMessage("A username and email is required");
      return;
    }
    if (!emailMessage) {
      setErrorMessage(`A message is required`);
      return;
    }

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);

    setUserName("");
    setEmailMessage("");
    setEmail("");
    setErrorMessage("");
    setSuccessMessage("Email was sent...")
  };

  return (
    <div className="container pt-4 main-contact-form">
      <h2>Contact</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="userName">Name:</label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder=""
        />
        <label htmlFor="emailFrom">Email address:</label>
        <input
          value={emailFrom}
          name="emailFrom"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          placeholder=""
        />
        <label htmlFor="emailMessage">Message:</label>
        <textarea
          value={emailMessage}
          name="emailMessage"
          onChange={handleInputChange}
          type="text"
          placeholder=""
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;

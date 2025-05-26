import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
// You can import an image if you decide to use one
// import contactImg from './path/to/your/contact-image.png'; // Example

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // For success/error messages
  const [isSending, setIsSending] = useState(false);

  // Get credentials from environment variables
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('Sending...');

    if (!serviceID || !templateID || !publicKey) {
        console.error("EmailJS environment variables are not set!");
        setStatus("Configuration error. Please contact admin.");
        setIsSending(false);
        return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          setStatus('Message sent successfully!');
          setIsSending(false);
          form.current.reset();
      }, (error) => {
          console.error('FAILED...', error.text);
          setStatus(`Failed to send message: ${error.text || 'Please try again.'}`);
          setIsSending(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Optional Image Section */}
        {/* <div className="contact-image-wrapper">
          <img src={contactImg} alt="Get in touch" />
        </div> */}
        <div className="contact-form-wrapper">
          <h2>Get In Touch</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-main-form">
            {/* 
              Note: The CSS uses ".contact-main-form input" and ".contact-main-form textarea".
              The label elements are styled globally within the form scope for simplicity here.
              If you want more specific label styling, add classes to them.
            */}
            <div>
              {/* <label htmlFor="from_name">Name:</label> */}
              <input type="text" id="from_name" name="from_name" placeholder="Full Name" required />
            </div>
            <div>
              {/* <label htmlFor="user_email">Your Email:</label> */}
              <input type="email" id="user_email" name="user_email" placeholder="Email Address" required />
            </div>
            <div>
              {/* <label htmlFor="message">Message:</label> */}
              <textarea id="message" name="message" placeholder="Your Message" required />
            </div>
            <button type="submit" disabled={isSending}>
              <span>{isSending ? 'Sending...' : 'Send Message'}</span>
            </button>
            {status && (
              <p className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        /* === Color and Style Variables (for reference, used directly below) ===
          --gradient-start: #AA367C;
          --gradient-end: #4A2FBD;
          --text-light: #ffffff;
          --text-dark: #121212;
          --input-bg: rgba(255, 255, 255, 0.1);
          --input-bg-focus: rgba(255, 255, 255, 1);
          --input-border: rgba(255, 255, 255, 0.5);
          --input-border-focus: #4A2FBD;
          --button-bg: #ffffff;
          --button-text: #000000;
          --button-hover-bg: #121212;
          --button-hover-text: #ffffff;
          --border-radius-input: 20px;
          --border-radius-button: 50px;
          --font-primary: 'Arial', sans-serif; 
          --transition-speed: 0.3s;
        */

        .contact-section {
          font-family: 'Arial', sans-serif; /* Replace with your desired font */
          background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
          padding: 80px 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-x: hidden;
        }

        .contact-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          max-width: 1100px;
          width: 90%;
          margin: 0 auto;
        }

        /* === Optional Image Styling === */
        .contact-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-image-wrapper img {
          max-width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* === Form Wrapper Styling === */
        .contact-form-wrapper {
          flex: 1;
          max-width: 500px; /* Or adjust if you have an image */
          width: 100%; /* Take full width if no image or on small screens */
        }

        .contact-form-wrapper h2 {
          font-size: 45px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 30px;
          text-align: center;
        }

        /* === Form Element Styling === */
        .contact-main-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* Styling for labels if you uncomment them or want them implicitly styled */
        .contact-main-form label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          color: #ffffff;
          font-size: 14px;
        }
        
        .contact-main-form input,
        .contact-main-form textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          color: #ffffff;
          padding: 18px 26px;
          font-weight: 500;
          font-size: 16px;
          letter-spacing: 0.5px;
          transition: background 0.3s ease-in-out,
                      color 0.3s ease-in-out,
                      border-color 0.3s ease-in-out,
                      box-shadow 0.3s ease-in-out;
          outline: none;
          box-sizing: border-box;
        }

        .contact-main-form input:focus,
        .contact-main-form textarea:focus {
          background: rgba(255, 255, 255, 1);
          color: #121212;
          border-color: #4A2FBD;
          box-shadow: 0 0 0 3px rgba(74, 47, 189, 0.3);
        }

        .contact-main-form input::placeholder,
        .contact-main-form textarea::placeholder {
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
          opacity: 0.7;
        }

        .contact-main-form input:focus::placeholder,
        .contact-main-form textarea:focus::placeholder {
          color: #121212;
          opacity: 0.6;
        }

        .contact-main-form textarea {
          min-height: 150px;
          resize: vertical;
        }

        /* === Button Styling === */
        .contact-main-form button {
          font-weight: 700;
          color: #000000;
          background-color: #ffffff;
          padding: 16px 40px; /* Adjusted padding for better look */
          font-size: 18px;
          margin-top: 25px;
          border-radius: 50px; /* Pill shape */
          border: none;
          position: relative;
          transition: color 0.3s ease-in-out,
                      transform 0.3s ease-in-out;
          cursor: pointer;
          overflow: hidden;
          text-align: center;
          display: inline-block;
          align-self: center; /* Center button */
        }

        .contact-main-form button span {
          z-index: 1;
          position: relative;
        }

        .contact-main-form button::before {
          content: "";
          background: #121212;
          width: 0;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          transition: width 0.3s ease-in-out;
          border-radius: 50px; /* Match button's radius */
        }

        .contact-main-form button:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .contact-main-form button:hover::before {
          width: 100%;
        }
        
        .contact-main-form button:active {
            transform: translateY(0px);
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .contact-main-form button:disabled {
          background-color: #ccc;
          color: #666;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        .contact-main-form button:disabled::before {
          width: 0; /* Ensure hover effect doesn't apply when disabled */
        }


        /* === Status Message Styling === */
        .status-message {
          margin-top: 20px;
          padding: 12px;
          border-radius: 8px;
          font-weight: 500;
          text-align: center;
        }
        .status-message.success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .status-message.error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        /* === Responsive Adjustments === */
        @media (max-width: 992px) {
          .contact-container {
            flex-direction: column;
            gap: 50px;
          }
          .contact-image-wrapper {
            max-width: 70%;
            margin-bottom: 0;
          }
          .contact-form-wrapper {
             max-width: 500px; /* Keep form from getting too wide */
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 20px; /* Add some side padding on mobile */
          }
          .contact-form-wrapper h2 {
            font-size: 36px;
            margin-bottom: 25px;
          }
          .contact-main-form input,
          .contact-main-form textarea {
            padding: 16px 22px;
            font-size: 15px;
          }
          .contact-main-form button {
            padding: 14px 35px;
            font-size: 16px;
          }
        }
        
        @media (max-width: 480px) {
            .contact-form-wrapper h2 {
                font-size: 30px;
            }
            .contact-main-form input,
            .contact-main-form textarea {
                font-size: 14px;
                padding: 14px 20px;
            }
             .contact-main-form button {
                padding: 12px 30px;
                font-size: 15px;
            }
        }
      `}</style>
    </section>
  );
};
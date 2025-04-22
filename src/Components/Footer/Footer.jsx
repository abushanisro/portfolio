import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';
import { FaLinkedin } from 'react-icons/fa';
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false); // ✅ Added missing state
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setSubscribing(true);
    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        subscribedAt: Timestamp.now()
      });

      setSuccessMessage("Thanks for subscribing! I'll keep you posted 🎉");
      setEmail('');
      setTimeout(() => setSuccessMessage(''), 4000);
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Abushan Logo" />
          <p>
            I'm Abushan — a curious product mind with a builder’s heart.
            Whether it’s crafting clean UI or exploring product-market fit,
            I love turning ideas into user-focused solutions.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="email"
              placeholder='Get updates'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribing}
            />
          </div>
          <div
            className="footer-subscribe"
            onClick={handleSubscribe}
            style={{
              cursor: subscribing ? 'not-allowed' : 'pointer',
              opacity: subscribing ? 0.6 : 1
            }}
          >
            {subscribing ? 'Subscribing...' : 'Subscribe'}
          </div>
          {successMessage && (
            <p className="footer-success-message">{successMessage}</p>
          )}
        </div>
      </div>

      <hr style={{ border: '1px solid #444' }} />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Abushan. Built with love, logic & late nights.</p>
        <div className="footer-bottom-right">
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Privacy</a>
          <span>Let’s connect</span>
          <a href="https://www.linkedin.com/in/abushan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={26} color="#0077b5" style={{ cursor: 'pointer', marginLeft: '8px' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

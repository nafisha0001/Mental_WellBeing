// Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p>Subscribe to our newsletter</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Input your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-logo">
          <img src="https://as2.ftcdn.net/v2/jpg/06/32/87/91/1000_F_632879123_oONQU284ijVi7JdPR5vwQuhpuUzVXKcE.jpg" alt="MindCare Logo" />
          <span>MindCare</span>
        </div>

        <ul className="footer-nav">
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/help-center">Help Center</a></li>
          <li><a href="/contact">Contact us</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>

      <hr/>

      <div className="footer-bottom">
        <div className="language-selector">
          <select>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <div className="footer-copyright">
          <p>© 2022 Brand, Inc. - <a href="/privacy">Privacy</a> - <a href="/terms">Terms</a> - <a href="/sitemap">Sitemap</a></p>
        </div>

        <div className="footer-social">
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

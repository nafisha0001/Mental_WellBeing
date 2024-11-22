import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'login' or 'signup'

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <header className="header">
      <div className="logo">
        <div className="circle"></div>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workshops">Workshops</Link></li>
          <li><Link to="/professional-help">Professional Help</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn" onClick={() => openModal('login')}>Login</button>
        <button className="signup-btn" onClick={() => openModal('signup')}>SignUp</button>
      </div>

      {/* Modal Component */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{modalType === 'login' ? 'Login' : 'Sign Up'}</h2>
            <form>
              <input type="email" placeholder="Email Address" className="modal-input" required />
              <input type="password" placeholder="Password" className="modal-input" required />
              <button type="submit" className="modal-login-btn">
                {modalType === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

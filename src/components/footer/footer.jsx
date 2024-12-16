import React from 'react';
import './footer.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
      <p>&copy; 2024 CN'A. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
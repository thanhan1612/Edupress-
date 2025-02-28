import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h2 className="logo">EduPress</h2>
          <p>Một ngày mới mang đến những cơ hội và thách thức mới cho tất cả chúng ta.</p>
        </div>
        <div className="footer-section">
          <h3>GET HELP</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Latest Articles</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>PROGRAMS</h3>
          <ul>
            <li><a href="#">Art & Design</a></li>
            <li><a href="#" className="highlight">Business</a></li>
            <li><a href="#">IT & Software</a></li>
            <li><a href="#">Languages</a></li>
            <li><a href="#">Programming</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>Address: 2000 </p>
          <p>Tel:??!!??</p>
          <p>Mail: <a href="mailto:supportlms@gmail.com">Support@gmail.com</a></p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



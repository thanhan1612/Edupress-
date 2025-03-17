import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="navba hero-container">
        <div className="hero-text">
          <h1>Empower Your Future with EduPress</h1>
          <p>Discover the best online courses to boost your skills and career.</p>
          <button className="btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="avtmid.jpg" alt="Online Courses" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


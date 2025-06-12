import React from 'react';
import { motion } from 'framer-motion';
import './Welcome.css';
import profileImage from '../assets/Elan.jpg';

const Welcome = () => {
  // Function to handle scroll to contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="welcome-section">
      <div className="welcome-container">
        {/* Left Content - Text Section */}
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* "Welcome to My Portfolio" Title */}
          <motion.h1
            className="welcome-title"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>

          {/* Name and Role */}
          <motion.h2
            className="typing-name glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Hi, I'm <span className="highlight">Elankumaran S</span>
          </motion.h2>

          <motion.p
            className="typing-role glow-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Front-End Developer
          </motion.p>

          <motion.p
            className="welcome-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            I specialize in crafting responsive, pixel-perfect web interfaces using React, JavaScript, HTML5, and CSS3. Let’s create seamless user experiences together!
          </motion.p>

          <div className="button-group">
            <motion.button
              className="contact-btn"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              Get in Touch
            </motion.button>

            <motion.a
              href="/Elankumaran_Front-end_Developer.pdf"
              download
              className="resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 1 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Image Section */}
        <motion.div
          className="image-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
        >
          <img src={profileImage} alt="Profile" className="profile-image-rectangle glowing-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;

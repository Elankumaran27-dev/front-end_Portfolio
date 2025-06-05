import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <motion.section
      className="aboutme-section"
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="aboutme-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="aboutme-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I am a Front-End Developer with a strong foundation in building responsive, interactive web interfaces. With 2 years of experience in iOS development and a recent transition to front-end technologies like HTML, CSS, JavaScript, and React.js, I focus on crafting clean and efficient user experiences.
      </motion.p>

      <motion.div
        className="aboutme-card fade-up"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3>🎨 What I Do</h3>
        <p>
          I build <span className="highlight">visually appealing, user-friendly front-end applications</span> using <strong>React.js, HTML5, CSS3, and JavaScript</strong>.
        </p>
      </motion.div>

      <motion.div
        className="aboutme-card fade-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3>📌 Experience Timeline</h3>
        <ul>
          <li><strong>2022 – 2024:</strong> iOS Developer @ Casperon Technologies</li>
          <li><strong>2024 – Present:</strong> Front-End Developer (React, HTML, CSS, JavaScript)</li>
        </ul>
      </motion.div>

      <motion.div
        className="aboutme-card fade-right"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3>🎯 Currently Learning</h3>
        <p>✅ Advanced React concepts & performance optimization</p>
        <p>✅ Front-end tooling & UI animations with Framer Motion</p>
      </motion.div>

      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="skills-title">🛠 My Tech Stack</h3>
        <div className="skills-grid">
          {[
            { icon: 'fab fa-html5', label: 'HTML5' },
            { icon: 'fab fa-css3-alt', label: 'CSS3' },
            { icon: 'fab fa-js', label: 'JavaScript' },
            { icon: 'fab fa-react', label: 'React' },
            { icon: 'fab fa-git-alt', label: 'Git' },
            { icon: 'fas fa-code', label: 'Responsive Design' },
            { icon: 'fas fa-paint-brush', label: 'UI/UX Principles' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <i className={`${skill.icon} colored`}></i>
              <p>{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;

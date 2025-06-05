// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CodeWithElanLogo from "./CodeWithElanLogo";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="footer-container"
      id="footer"
    >
      <div className="footer-columns">
        <div className="footer-section">
          <CodeWithElanLogo />
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> elankumaran.dev@gmail.com</p>
          <p><FaMapMarkerAlt /> Vriddhachalam, Tamil Nadu</p>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
        </div>
        <p className="footer-credit">© 2025 Elankumaran. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;

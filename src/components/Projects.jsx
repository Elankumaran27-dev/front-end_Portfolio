import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectData = [
  {
    title: "Portfolio Website",
    description:
      "Built a responsive personal portfolio using React, Tailwind CSS, and Framer Motion. Includes smooth scrolling, animations, and reusable components.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Elankumaran27-dev/front-end_Portfolio",
    live: "https://front-end-portfolio-murex-two.vercel.app/",
  },
  {
    title: "Grad School Website",
    description:
      "A clean educational landing page built using HTML, CSS, and Bootstrap. Showcases course details, testimonials, and responsive design.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Elankumaran27-dev/Grad-School",
    live: "https://grad-school-azure.vercel.app/",
  },
  {
    title: "SmileCare Website",
    description:
      "Created a responsive dental care site with HTML, CSS, and JavaScript. Features include hero section, services, testimonials, and a contact form.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Elankumaran27-dev/smilecare",
    live: "https://smilecare-eight.vercel.app/index.html",
  },
  {
    title: "Tasty Cater Website",
    description:
      "Responsive catering website built with React and Bootstrap. Features modern design, menu showcase, and interactive sections for food business promotion.",
    tech: ["React", "Bootstrap"],
    github: "https://github.com/Elankumaran27-dev/tasty-cater",
    live: "https://tasty-cater.vercel.app/",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glow-on-hover"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="tech-badge"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="project-links">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px var(--secondary-color)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                View on GitHub
              </motion.a>
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px #1abc9c",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

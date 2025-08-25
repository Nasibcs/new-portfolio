import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import image from "./images/nasibi.jpg"
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center gap-16">

        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-400 to-emerald-600 blur-3xl opacity-30 animate-pulse"></div>
          <img
            src={image}
            alt="Profile"
            className="relative w-[22rem] h-[22rem] object-cover rounded-3xl shadow-2xl border border-green-500/20"
          />
        </motion.div>

        {/* About Text Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/60 dark:bg-gray-800/50 p-10 rounded-3xl shadow-lg max-w-2xl"
        >
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="mb-6 leading-relaxed text-lg">
            Hi, I’m <span className="font-semibold text-green-500">Nasib</span> a passionate 
            frontend developer who loves creating beautiful, interactive, and modern web 
            experiences. My focus is on clean design, smooth animations, and delivering 
            impactful digital solutions.
          </p>
          <p className="mb-6 leading-relaxed text-lg">
            I have a strong background in JavaScript, React, and UI/UX design principles. 
            I believe design should not just look good but feel great to use.
          </p>
          <p className="mb-8 leading-relaxed text-lg">
            When I’m not coding, you can find me exploring new tech trends, designing UI concepts, 
            or enjoying a good cup of coffee.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Link to="https://www.linkedin.com/in/nasib-burhan-ab446235b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-7 h-7 hover:text-green-500 transition-colors" />
            </Link>
            <Link to="https://github.com/Nasibcs" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-7 h-7 hover:text-green-500 transition-colors" />
            </Link>
            <Link to="/contact">
              <FaEnvelope className="w-7 h-7 hover:text-green-500 transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import '../../index.css';
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 
    bg-gradient-to-b from-white via-gray-50 to-gray-200 
    dark:from-black dark:via-gray-900 dark:to-gray-950 
    text-black dark:text-white transition-colors duration-500 overflow-hidden">

      {/* Floating Glow Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-7xl font-extrabold text-center tracking-tight drop-shadow-lg"
      >
        Hi, I'm <span className="text-green-500">Nasib</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-gray-700 dark:text-gray-400 mt-4 text-center text-lg sm:text-2xl max-w-2xl leading-relaxed"
      >
        I design and build <span className="text-green-500 font-semibold">modern</span> & 
        <span className="text-green-400 font-semibold"> interactive</span> web experiences that leave a lasting impression.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          to="/projects"
          className="mt-10 inline-block px-8 py-3 bg-green-600 hover:bg-green-700 
          text-white rounded-full font-semibold shadow-lg hover:shadow-green-500/50 
          transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </Link>
      </motion.div>
    </div>
  );
}

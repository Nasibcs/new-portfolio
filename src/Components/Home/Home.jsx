import { motion } from "framer-motion";
import '../../index.css';
import { Link } from "react-router-dom";
import image from "../About/images/image.jpg"

export default function Landing() {
  return (
    <div className="relative h-[50rem] flex flex-col lg:flex-row items-center px-4 
    bg-gradient-to-b from-white via-gray-50 to-gray-200 
    dark:from-black dark:via-gray-900 dark:to-gray-950 
    text-black dark:text-white transition-colors duration-500 overflow-hidden
      md:h-[56rem] lg:h-screen xl:h-[45rem]">

      <div className="absolute top-10 left-10 w-72 h-72 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1 py-10 lg:py-0 relative top-[12rem] lg:top-20 xl:top-14"
      >
        <div className="relative  w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-green-400/30 shadow-2xl shadow-green-500/20 xl:h-[30rem] xl:w-[30rem]">
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-lg">
          <img 
  src={image}
  alt="Nasib" 
  className="w-full h-full object-cover"
/>
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-500/10 rounded-full"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full"></div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[40rem] flex flex-col items-center lg:items-start justify-center order-1 lg:order-2 text-center lg:text-left px-4 lg:px-12 relative top-[12rem] lg:top-24 xl:top-10 xl:w-[50rem]
           "
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg xl:text-8xl"
        >
          Hi, I'm <span className="text-green-500">Nasib</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-700 dark:text-gray-400 mt-4 text-lg sm:text-2xl max-w-2xl leading-relaxed"
        >
          I design and build <span className="text-green-500 font-semibold">modern</span> & 
          <span className="text-green-400 font-semibold"> interactive</span> web experiences that leave a lasting impression.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 xl:mt-13"
        >
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 
            text-white rounded-full font-semibold shadow-lg hover:shadow-green-500/50 
            transition-all duration-300 transform hover:scale-105 xl:p-4 xl:rounded-lg xl:w-[10rem] text-center"
          >
            View My Work
          </Link>
        </motion.div>
        
      </motion.div>
    </div>
  );
}
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import img from "./images/image.png"
import elearn from "./images/elearna (2).png"
import un from "./images/un.png"
import form from "./images/form1.png"
import portfolio from "./images/portfolio .png";
const projects = [
  {
    title: "Elearna - Online Learning Platform",
    description: "A comprehensive online learning platform with courses, quizzes, and progress tracking for modern education.",
    link: "https://elearna-website.vercel.app/",
    repo: "https://github.com/Nasibcs/Elearna-website",
    image:elearn,
     tags: ["React","JavaScript", "Tailwind"]
  },
  {
    title: "University Admin Panel",
    description: "A feature-rich admin panel for managing university operations, including student records, course management, and faculty administration. the username is : (nasib) and password is :(nasib)",
    link: "https://university-admin-panel-dun.vercel.app/",
    repo: "https://github.com/Nasibcs/University-Admin-Panel-",
    image: un,
   tags: ["React", "TypeScript","Tailwind"]
  },
  {
    title: "From Validation",
    description: "A robust form validation library for React applications, providing easy-to-use validation rules and error handling.",
    link: "https://from-validation-two.vercel.app/",
    repo: "https://github.com/Nasibcs/From-validation-",
    image: form,
    tags: ["React","JavaScript", "Tailwind"]
  },
    {
    title: "My portfolio website",
    description: "A personal portfolio website to showcase my projects, skills, and experience as a developer.",
    link: "https://new-portfolio-seven-taupe.vercel.app/",
    repo: "https://github.com/yourusername/food-delivery",
    image: portfolio,
     tags: ["React","JavaScript", "Tailwind"]
  },
    {
    title: "comming projects ",
    description: "A personal portfolio website to showcase my projects, skills, and experience as a developer.",
    link: "https://new-portfolio-seven-taupe.vercel.app/",
    repo: "https://github.com/yourusername/food-delivery",
    image: portfolio,
     tags: ["React","JavaScript", "Tailwind"]
  },
    {
    title: "",
    description: "A personal portfolio website to showcase my projects, skills, and experience as a developer.",
    link: "https://new-portfolio-seven-taupe.vercel.app/",
    repo: "https://github.com/yourusername/food-delivery",
    image: portfolio,
     tags: ["React","JavaScript", "Tailwind"]
  },
  
];

export default function ProjectsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-28 px-4 sm:px-8 lg:px-20 transition-colors duration-700 ">
   <h1
  className="
    text-center relative bottom-16 
    text-gray-700 dark:text-gray-300 
    font-sans tracking-wide font-bold 
    text-2xl sm:text-3xl md:text-4xl 
    lg:text-start
    xl:text-start
    2xl:text-start
    mt-24
  "
>
  My Skills and Projects
</h1>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      {/* Card */}
      <div className="h-full flex flex-col bg-white/90 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/20 transition-all duration-500">
        
        {/* Image with Reveal Effect */}
        <motion.div 
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative overflow-hidden h-60"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-5 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full border border-green-400/40 text-gray-700 dark:text-gray-300 bg-white/40 dark:bg-gray-700/30 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg shadow-lg flex-1 text-center transition-all duration-300"
            >
              <FiExternalLink className="mr-2" />
              Live Demo
            </a>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
              >
                <FiGithub className="mr-2" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Glow Border on Hover */}
      <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-gradient-to-r from-green-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    </motion.div>
  ))}
</div>

    </section>
  );
}
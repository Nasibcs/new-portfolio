import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import ThemeToggle from "../../DarkMode/ThemsToggle";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const mobileNavVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-md border-b border-white/20 dark:border-gray-700/20 py-3"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
            >
              Nasib
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ y: -2 }}>
                  <Link
                    to={item.path}
                    className="relative group font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-green-400 to-emerald-500 w-0 group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div whileTap={{ scale: 0.95 }}>
              <ThemeToggle/>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.div whileTap={{ scale: 0.9 }}>
              <ThemeToggle className="mr-4" />
            </motion.div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <IoMdClose className="w-6 h-6" />
              ) : (
                <HiOutlineMenuAlt1 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-40 flex flex-col items-center justify-center"
          >
            <motion.ul
              variants={mobileNavVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8 text-center"
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariant}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-semibold text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

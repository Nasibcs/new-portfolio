import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .send(
        "nasib_1",      // Replace with your EmailJS service ID
        "nasib_2",     // Replace with your EmailJS template ID
        formData,
        "DNUK7DTyusBxjxR-1"       // Replace with your EmailJS public key
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setSuccess(false);
      });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
              >
                Message
              </label>
            </div>

            {success === true && (
              <p className="text-green-500 text-sm">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-500 text-sm">Something went wrong. Try again.</p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <p className="text-lg leading-relaxed">
              Whether you have a question, want to collaborate, or just say hi — 
              my inbox is always open. I’ll try my best to get back to you quickly.
            </p>

            <div className="flex gap-6 text-2xl">
              <a href="https://www.linkedin.com/in/nasib-burhan-ab446235b/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Nasibcs" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaGithub />
              </a>
              <a href="/contact" className="hover:text-green-500 transition">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

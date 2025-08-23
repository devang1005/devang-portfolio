import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900 rounded-3xl m-10 bg-gradient-to-b from-neutral-900/30 to-neutral-900/10 shadow-lg hover:shadow-xl transition-all duration-300">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
      >
        Get In Touch .
      </motion.h1>

      <div className="flex flex-col items-center gap-6 text-center tracking-tight">
        
        {/* Resume */}
        <motion.a
        whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          href="https://devang-resume.tiiny.site"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
          <FaFileAlt className="text-white text-lg" />
          <span >{CONTACT.resume}</span>
        </motion.a>

        {/* Phone */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
          <FaPhoneAlt className="text-white text-lg" />
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
          <FaEnvelope className="text-white text-lg" />
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

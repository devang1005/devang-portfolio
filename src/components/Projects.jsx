import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3); // show 3 projects initially
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(3); // collapse back
      setExpanded(false);
    } else {
      setVisibleCount(PROJECTS.length); // show all
      setExpanded(true);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.slice(0, visibleCount).map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={projects.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={projects.image}
                  width={150}
                  height={150}
                  alt={projects.title}
                  className="mb-6 rounded"
                />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{projects.title}</h6>
              <p className="mb-4 text-neutral-400">{projects.description}</p>
              {projects.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-8">
  <button
    onClick={handleToggle}
    className="px-6 py-2 rounded-full border border-purple-500 text-purple-400 
               bg-transparent backdrop-blur-sm hover:bg-purple-500/10 
               transition duration-300 shadow-lg hover:scale-105"
  >
    {expanded ? "Show Less" : "Show More Projects"}
  </button>
</div>
    </div>
  );
};

export default Projects;

import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Import 3 images
import Pic3 from "../assets/devang34.png";
import Pic2 from "../assets/devangpic.png";
import Pic1 from "../assets/devang23.png";

const images = [Pic1, Pic2, Pic3];

const About = () => {
  const [index, setIndex] = useState(0);

  // Auto rotate every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        {/* Rotating Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              style={{
                perspective: "1200px", // enables 3D effect
              }}
            >
              {images.map((img, i) => {
                const angle = (360 / images.length) * (i - index); // distribute images in circle
                return (
                  <motion.img
                    key={i}
                    src={img}
                    alt="About"
                    className="absolute top-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl shadow-lg"
                    animate={{
                      rotateY: angle, // horizontal rotation
                      translateZ: 300, // push images outward
                      opacity: i === index ? 1 : 0.5, // highlight active one
                      scale: i === index ? 1 : 0.8, // active image is bigger
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

import profile1 from "../assets/projects/certi-1 (1).png";
import profile2 from "../assets/projects/certi-2.png";
import profile3 from "../assets/projects/certi-3.png";
import profile4 from "../assets/projects/certi-4.png";
import profile5 from "../assets/projects/certi-5.png";
import profile6 from "../assets/projects/certi-6.png";
import { motion } from "framer-motion";

const Certificates = () => {
  const images = [profile1, profile2, profile3, profile4, profile5, profile6];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h2>

      {/* Carousel container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // speed of scroll (increase = slower)
            ease: "linear",
          }}
        >
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900 shadow-lg"
              style={{ width: "400px" }}
            >
              <img
                src={img}
                alt={`certificate-${index}`}
                className="rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;

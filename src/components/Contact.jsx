import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900 border rounded-3xl m-10  hover:border-purple-800">
        <motion.h1
         whileInView={{opacity:1 , y:0}} 
         initial={{opacity:0 , y:-100}} 
         transition={{duration:0.5}}
        className="my-10 text-center text-4xl ">
            Get In Touch
        </motion.h1>
        <div className="text-center tracking-tighter  ">
           <a href="https://devangpatelresume.tiiny.site" className="underline" >{CONTACT.resume}</a> <br />
            <motion.p 
            whileInView={{opacity:1 , x:0}} 
            initial={{opacity:0 , x:-100}} 
            transition={{duration:1}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <a  href="mailto:devangpatel10505@gmail.com">{CONTACT.email}</a>
        
        </div>
    </div>
  )
}

export default Contact
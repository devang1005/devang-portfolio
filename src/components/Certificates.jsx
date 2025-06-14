import profile1 from "../assets/projects/certi-1 (1).png"
import profile2 from "../assets/projects/certi-2.png"
import profile3 from "../assets/projects/certi-3.png"
import profile4 from "../assets/projects/certi-4.png"
import profile5 from "../assets/projects/certi-5.png"
import profile6 from "../assets/projects/certi-6.png"
import { motion } from "framer-motion";


const iconvarriant = (duration) =>({
    initial:{y:-10},
    animate:{
        y : [10 , -10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        },
    },
});


const Certificates = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity:1 , y:0}} 
            initial={{opacity:0 , y:-100}} 
            transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Certificates</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
               <img src={profile1} alt="certificate-1" width='400' height='30'/>
            </motion.div>
            <motion.div variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
               <img src={profile2} alt="certificate-2" width='400' height='30'/>
            </motion.div>
            <motion.div variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
               <img src={profile3} alt="certificate-3" width='400' height='30'/>
            </motion.div>
           <motion.div variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
               <img src={profile4} alt="certificate-4" width='400' height='30'/>
            </motion.div>
             <motion.div variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
               <img src={profile5} alt="certificate-4" width='400' height='30'/>
            </motion.div>
             <motion.div variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
               <img src={profile6} alt="certificate-4" width='400' height='30'/>
            </motion.div>

        </div>
    </div>
  )
}

export default Certificates
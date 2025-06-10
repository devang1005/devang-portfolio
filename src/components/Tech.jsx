import { DiMysql } from "react-icons/di";
import { SiPytorch } from "react-icons/si";
import { motion } from "framer-motion";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiScikitlearn } from "react-icons/si";

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



const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity:1 , y:0}} 
            initial={{opacity:0 , y:-100}} 
            transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                </svg>
            </motion.div>
            <motion.div variants={iconvarriant(3)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
                 <DiMysql className="text-7xl text-blue-500" />
            </motion.div> 
            <motion.div variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <rect width="5" height="10" x="18" y="4" fill="#1a237e"></rect><rect width="5" height="10" x="18" y="25" fill="#1a237e"></rect><rect width="5" height="5" x="18" y="17" fill="#fbc02d"></rect><rect width="5" height="33" x="10" y="13" fill="#1a237e"></rect><rect width="5" height="10" x="26" y="33" fill="#1a237e"></rect><rect width="5" height="10" x="26" y="12" fill="#1a237e"></rect><rect width="5" height="5" x="26" y="25" fill="#ff4081"></rect><rect width="5" height="33" x="34" y="2" fill="#1a237e"></rect>
            </svg>
            </motion.div>
            <motion.div variants={iconvarriant(2)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <polygon fill="#00acc1" points="21.196,12.276 14.392,8.842 6.922,12.569 13.912,16.078"></polygon><polygon fill="#00acc1" points="24.317,13.85 31.451,17.453 24.049,21.169 17.049,17.654"></polygon><polygon fill="#00acc1" points="33.846,8.893 41.176,12.569 34.619,15.86 27.47,12.254"></polygon><polygon fill="#00acc1" points="30.69,7.31 24.091,4 17.564,7.258 24.364,10.687"></polygon><polygon fill="#00acc1" points="25.532,35.725 25.532,44.73 33.525,40.74 33.518,31.732"></polygon><polygon fill="#00acc1" points="33.514,28.587 33.505,19.674 25.532,23.637 25.532,32.554"></polygon><polygon fill="#00acc1" points="43.111,26.918 43.111,35.957 36.292,39.359 36.287,30.361"></polygon><polygon fill="#00acc1" points="43.111,23.756 43.111,14.898 36.279,18.294 36.285,27.225"></polygon><path fill="#448aff" d="M22.71,23.637l-5.384-2.708v11.699c0,0-6.586-14.012-7.195-15.27 c-0.079-0.163-0.401-0.341-0.484-0.385C8.46,16.353,5,14.601,5,14.601v20.676l4.787,2.566V27.031c0,0,6.515,12.52,6.582,12.657 s0.718,1.455,1.418,1.919c0.929,0.618,4.919,3.016,4.919,3.016L22.71,23.637z"></path>
            </svg>
            </motion.div>
            <motion.div variants={iconvarriant(4)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <linearGradient id="70AWaG9FpYs2yn8LzRfdUa_J0SgMWzAxqFj_gr1" x1="17.151" x2="29.996" y1="8.498" y2="37.571" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f09701"></stop><stop offset="1" stop-color="#e36001"></stop></linearGradient><path fill="url(#70AWaG9FpYs2yn8LzRfdUa_J0SgMWzAxqFj_gr1)" d="M8.108,18.006C10.534,11.579,16.724,7,24,7c7.276,0,13.466,4.579,15.892,11.006	C36.653,14.6,30.757,12.313,24,12.313C17.243,12.313,11.347,14.6,8.108,18.006z M24,35.688c-6.757,0-12.653-2.287-15.892-5.693	C10.534,36.421,16.724,41,24,41c7.276,0,13.466-4.579,15.892-11.006C36.653,33.4,30.757,35.688,24,35.688z"></path><linearGradient id="70AWaG9FpYs2yn8LzRfdUb_J0SgMWzAxqFj_gr2" x1="1.319" x2="25.671" y1="44.651" y2="1.059" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a1aab3"></stop><stop offset="1" stop-color="#8f979e"></stop></linearGradient><path fill="url(#70AWaG9FpYs2yn8LzRfdUb_J0SgMWzAxqFj_gr2)" d="M39.512,4.744c0,1.515-1.228,2.744-2.744,2.744s-2.744-1.228-2.744-2.744S35.253,2,36.768,2	S39.512,3.228,39.512,4.744z M10.976,40.415c-1.818,0-3.293,1.474-3.293,3.293c0,1.818,1.474,3.293,3.293,3.293	s3.293-1.474,3.293-3.293C14.268,41.889,12.794,40.415,10.976,40.415z M7.683,6.39c-1.212,0-2.195,0.983-2.195,2.195	s0.983,2.195,2.195,2.195s2.195-0.983,2.195-2.195S8.895,6.39,7.683,6.39z"></path>
            </svg>
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
                <SiPytorch className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
                 <PiMicrosoftExcelLogoFill className="text-7xl text-green-500" />
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl border-4 p-4 border-neutral-800">
                <SiScikitlearn className="text-7xl text-black-500" />
            </motion.div>

        </div>
    </div>
  )
}

export default Tech
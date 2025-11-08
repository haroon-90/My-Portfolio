import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import MyPic from "../assets/MyPic.jpg"
import Icon_floating from "./icon_floating"

const Hero2 = () => {
  const navigate = useNavigate()

  return (
    <motion.div
      key="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-[calc(100vh-4em)] mt-[15em] sm:mt-[5em] md:mt-[2em] lg:mt-0 flex flex-col lg:flex-row items-center justify-center px-6 gap-12 text-white"
    >
      <motion.div 
        className="flex flex-col gap-6 max-w-xl text-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I'm <span className="text-yellow-500">Muhammad Haroon Nawaz</span>
        </h1>

        <h2 className="text-2xl font-semibold text-white drop-shadow-[0_0_8px_rgba(256,256,256,0.9)]">
          A Full Stack Developer & UI Enthusiast
        </h2>

        {/* <p className="text-white text-lg leading-relaxed">
          Passionate about building modern, efficient, and user-centric web apps. I merge creativity and logic to craft digital experiences that stand out.
        </p> */}

        <div className="flex flex-wrap gap-4 mt-4">
          <motion.button
            onClick={() => navigate("/projects")}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            My Projects
          </motion.button>

          <motion.button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black rounded-full text-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Let's Talk
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        className="relative flex items-center justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-4xl border-2 border-blue-500 bg-white/10 backdrop-blur-md overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500">
          <img
            src={MyPic}
            alt="Haroon"
            className="w-full h-full object-cover object-top rounded-3xl opacity-90 hover:opacity-100 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero2

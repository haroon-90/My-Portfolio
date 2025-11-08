import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import MyPic from '../assets/MyPic.jpg'

const Hero2 = () => {
    const navigate = useNavigate()

    return (
        <motion.div
            key="hero"
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <div className="h-[calc(100vh-5em)] mt-[10em] sm:mt-[5em] md:mt-[2em] lg:mt-0 flex flex-col lg:flex-row items-center justify-center gap-10 px-6 text-white">

                <div className="group flex flex-col justify-center items-start text-left max-w-xl space-y-6 backdrop-blur-[6px] bg-white/5 p-8 rounded-3xl border-4 border-yellow-500 shadow-[0_0_30px_5px_rgba(234,179,8,0.5)] hover:shadow-[0_0_50px_10px_rgba(234,179,8,0.8)] transition-all duration-500">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-extrabold leading-tight"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hey, I'm <span className="text-yellow-500">Muhammad Haroon Nawaz</span>
                    </motion.h1>

                    <motion.h2
                        className="text-xl sm:text-2xl font-medium text-white"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        A Full Stack Developer
                    </motion.h2>

                    {/* <motion.p
                        className="text-white leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        I love building modern, user-friendly, and scalable web apps. My passion is turning complex ideas into elegant digital solutions using MERN stack.
                    </motion.p> */}

                    <motion.div
                        className="flex gap-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <button
                            onClick={() => navigate('/projects')}
                            className="px-6 py-2 text-lg rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-6 py-2 text-lg rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold transition-all duration-300"
                        >
                            Contact Me
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="rounded-full transition-all duration-500"></div>
                    <img
                        src={MyPic}
                        alt="Haroon"
                        className="w-60 h-60 sm:w-72 sm:h-72 rounded-full object-cover object-top border-4 border-yellow-500 shadow-[0_0_30px_5px_rgba(234,179,8,0.5)] group-hover:shadow-[0_0_50px_10px_rgba(234,179,8,0.8)] transition-all duration-500"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero2

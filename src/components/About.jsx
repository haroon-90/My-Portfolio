import { motion } from "framer-motion";
import { FaUserAlt, FaCode, FaLightbulb, FaFilePdf } from "react-icons/fa";
import Resume from '../assets/MuhammadHaroonNawaz(Resume).pdf';
import Button1 from "../elements/Button";

const About = () => {

    const btnfunc = () => {
        window.open(Resume, '_blank');
    }

    return (
        <motion.div
            key="About"
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            animate={{ clipPath: "circle(170% at 50% 50%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="min-h-[calc(100vh-4em)] flex items-center justify-center px-4"
        >
            <div className="mt-[30em] sm:mt-[20em] md:mt-[5em] lg:mt-0 mx-auto flex flex-col justify-center items-center max-w-5xl w-full rounded-3xl shadow-lg bg-white/5 backdrop-blur-[9px] border border-white/10 hover:border-yellow-500 transition-all duration-300 hover:shadow-yellow-500/40">
                <div className="flex flex-col items-center justify-center p-6 text-white">
                    <h1 className="text-4xl font-bold text-center mb-6 text-yellow-500">
                        About Me
                    </h1>

                    <p className=" text-lg leading-relaxed mb-8 text-center">
                        Hi, I'm <span className="text-white font-bold">Muhammad Haroon Nawaz</span>,
                        a passionate Full Stack Developer who loves crafting clean, efficient and
                        user-focused web experiences. I enjoy turning complex problems into simple,
                        beautiful and functional solutions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-6 rounded-2xl bg-white/2 border border-white/10 hover:bg-white/5 hover:border-yellow-500 transition-all duration-300 hover:shadow-yellow-500/40"
                            style={{
                                WebkitBackdropFilter: "blur(10px)",
                                backdropFilter: "blur(10px)",
                            }}>
                            <FaUserAlt className="text-blue-500 text-4xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                            <p className="text-sm">
                                I’m a Computer Science student with a focus on web development and
                                building real-world applications. I love experimenting with new technologies.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 rounded-2xl bg-white/2 border border-white/10 hover:bg-white/5 hover:border-yellow-500 transition-all duration-300 hover:shadow-yellow-500/40"
                            style={{
                                WebkitBackdropFilter: "blur(10px)",
                                backdropFilter: "blur(10px)",
                            }}>
                            <FaCode className="text-green-400 text-4xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">What I Do</h3>
                            <p className="text-sm">
                                I specialize in React.js, Node.js and MongoDB, creating dynamic
                                frontends and efficient backends. I love writing clean, optimized code.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 rounded-2xl bg-white/2 border border-white/10 hover:bg-white/5 hover:border-yellow-500 transition-all duration-300 hover:shadow-yellow-500/40"
                            style={{
                                WebkitBackdropFilter: "blur(10px)",
                                backdropFilter: "blur(10px)",
                            }}>
                            <FaLightbulb className="text-yellow-400 text-4xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">My Vision</h3>
                            <p className="text-sm">
                                I aim to build tech that empowers people, scales easily, and
                                makes everyday life easier. My goal is to keep learning and innovating.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <Button1 className="flex justify-center items-center gap-2" onClick={btnfunc}>Download Resume <FaFilePdf /></Button1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;

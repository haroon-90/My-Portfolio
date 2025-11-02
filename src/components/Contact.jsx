import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            key="projects"
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <section className="h-[calc(100vh-4em)] flex items-center justify-center mx-2">
                <div className="group w-full max-w-lg bg-white/10 backdrop-blur-[2px] rounded-2xl shadow-2xl px-4 py-4 border border-white/20 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-500/40">
                    <div className="text-center mb-4">
                        <FiSend className="group-hover:text-blue-500 transition-all text-4xl text-white mx-auto mb-2" />
                        <h2 className="group-hover:text-blue-500 transition-all text-3xl font-bold text-white">Get in Touch</h2>
                        <p className="group-hover:text-blue-500 transition-all text-white/70 mt-1">I'd love to hear from you!</p>
                    </div>

                    <form className="space-y-3">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/20 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-4 top-2 text-white/70 text-sm transition-all duration-200 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
                            >
                                Your Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/20 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-4 top-2 text-white/70 text-sm transition-all duration-200 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
                            >
                                Your Email
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                placeholder=" "
                                rows="4"
                                className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/20 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-4 top-2 text-white/70 text-sm transition-all duration-200 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
                            >
                                Your Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-500/80 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiMapPin, FiAlertTriangle } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Button1 from "../elements/Button";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formspree.io/f/mjkgpqne", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
            } else {
                setError("Failed to submit. Try again later.");
                setTimeout(() => setError(""), 3000);
            }
        } catch (err) {
            setError("Error submitting form. Please retry.");
            setTimeout(() => setError(""), 3000);
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="min-h-[calc(100vh-5em)] flex items-center justify-center px-4"
        >
            <div className="mt-[10em] sm:mt-[5em] md:mt-[2em] lg:mt-0 w-full max-w-5xl bg-white/5 border border-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-12 grid md:grid-cols-2 gap-10 hover:border-yellow-500 transition-all duration-300 hover:shadow-yellow-500/40">
                <div className="flex flex-col justify-center text-white space-y-6">
                    <h2 className="text-4xl font-bold mb-2 text-yellow-400">Let's Connect</h2>
                    <p className="text-white leading-relaxed">
                        Have a question, project idea, or just want to say hi?
                        Fill the form or reach out through my socials below, I'd love to chat.
                    </p>
                    <div className="space-y-3 mt-6">
                        <div className="flex items-center gap-3 text-white">
                            <FiMail className="text-yellow-400 text-xl" /> haroonboy90@gmail.com
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <FiPhone className="text-yellow-400 text-xl" /> +92 300 9530640
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <FiMapPin className="text-yellow-400 text-xl" /> Kotla Arab Ali Khan, Pakistan
                        </div>
                    </div>
                    <div className="flex gap-5 mt-6">
                        <a href="https://github.com/haroon-90" target="_blank" rel="noreferrer" className="text-white/70 hover:text-yellow-400 text-2xl transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-haroon-nawaz-206343362/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-yellow-400 text-2xl transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/haroon_nawaz_" target="_blank" rel="noreferrer" className="text-white/70 hover:text-yellow-400 text-2xl transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/haroon.nawaz.144734" target="_blank" rel="noreferrer" className="text-white/70 hover:text-yellow-400 text-2xl transition-colors">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 bg-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400 transition-all duration-300 shadow-lg"
                >
                    <h1 className="font-bold text-xl text-blue-500 space-y-6 text-center">Send Me a Message</h1>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Name"
                            required
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
                        >
                            Your Name
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Email"
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
                        >
                            Your Email
                        </label>
                    </div>
                    <div className="relative">
                        <textarea
                            id="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Message"
                            required
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
                        >
                            Your Message
                        </label>
                    </div>
                    { error && (
                        <div className="mt-3 flex items-center justify-center">
                            <p className="text-red-500 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-medium shadow-md backdrop-blur-sm animate-fadeIn flex justify-center items-center gap-2">
                                <FiAlertTriangle/> {error}
                            </p>
                        </div>
                    )}

                    {/* <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-yellow-500/80 hover:bg-yellow-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"} <FiSend />
                    </button> */}
                    <Button1
                        className="w-full flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"} <FiSend />
                    </Button1>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;

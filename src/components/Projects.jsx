import dukaan from '../assets/projectIMG/dukaan_digital.png';
import LMS from '../assets/projectIMG/LMS.png';
import MiniXpress from '../assets/projectIMG/MiniXpress.png';
import PassBin from '../assets/projectIMG/PassBin.png';
import Taskify from '../assets/projectIMG/taskify.png';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Dukaan Digital",
            description: "E-commerce platform for small businesses to create online stores",
            technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Axios", "JWT", "React Router"],
            image: dukaan,
            liveLink: "https://haroon-90.github.io/Dukaan-Digital",
            githubLink: "https://github.com/haroon-90/Dukaan-Digital"
        },
        {
            id: 2,
            title: "LMS Platform",
            description: "A learning management system for student and teacher management",
            technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "Axios", "React Router"],
            image: LMS,
            liveLink: "https://haroon-90.github.io/",
            githubLink: "https://github.com/haroon-90/Student-Result-Management-System"
        },
        {
            id: 3,
            title: "MiniXpress",
            description: "A Simple, speedy all-in-one web app for everyone, united in one place!",
            technologies: ["React.js", "Tailwind CSS", "Axios", "React Router"],
            image: MiniXpress,
            liveLink: "https://haroon-90.github.io/MiniXpress",
            githubLink: "https://github.com/haroon-90/MiniXpress"
        },
        {
            id: 4,
            title: "PassBin",
            description: "A password manager to store and manage your passwords safely.",
            technologies: ["React.js", "Tailwind CSS", "Lordicon"],
            image: PassBin,
            liveLink: "https://haroon-90.github.io/Passbin_local",
            githubLink: "https://github.com/haroon-90/Passbin_local"
        },
        {
            id: 5,
            title: "Taskify",
            description: "A task management app to organize your daily tasks efficiently.",
            technologies: ["React.js", "Tailwind CSS", "Lordicon"],
            image: Taskify,
            liveLink: "https://haroon-90.github.io/Taskify",
            githubLink: "https://github.com/haroon-90/Taskify"
        }
    ];

    return (
        <motion.div
            key="projects"
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            animate={{ clipPath: "circle(400% at 50% 50%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            <div className="h-[calc(100vh-2em)] p-2 mt-[4em]">
                <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-white">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className=" flex flex-col justify-around items-center bg-linear-to-br from-white/10 to-white/5 rounded-lg p-4 border border-white/50 shadow-lg 
                        hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover object-top-left rounded-md shadow-sm"
                            />
                            <h3 className="text-xl font-semibold mt-4 text-white">{project.title}</h3>
                            <p className="text-gray-200 mt-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3 justify-center">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full text-sm text-white border border-white/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-4 justify-center w-full">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white w-full text-center bg-blue-800 font-medium px-2 py-1 rounded-lg border border-blue-600/50 hover:bg-blue-600/10 transition-colors duration-300"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 w-full text-center hover:text-white bg-gray-600 font-medium px-2 py-1 rounded-lg border border-gray-300/50 hover:bg-gray-300/10 transition-colors duration-300"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects

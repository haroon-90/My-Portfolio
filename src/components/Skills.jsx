import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiNpm, SiCanva } from 'react-icons/si';
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { motion } from 'framer-motion';

const Skills = () => {
    const skillsList = {
        frontend: [
            { name: 'HTML', icon: <FaHtml5 className='group-hover:text-orange-500' /> },
            { name: 'CSS', icon: <FaCss3Alt className='group-hover:text-blue-500' /> },
            { name: 'JavaScript', icon: <FaJs className='group-hover:text-yellow-400' /> },
            { name: 'React.js', icon: <FaReact className='group-hover:text-cyan-400' /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className='group-hover:text-sky-400' /> },
            { name: 'Bootstrap', icon: <FaBootstrap className='group-hover:text-purple-500' /> },
        ],

        backend: [
            { name: 'Node.js', icon: <FaNodeJs className='group-hover:text-green-500' /> },
            { name: 'Express.js', icon: <SiExpress className='group-hover:text-gray-200' /> },
            { name: 'MongoDB', icon: <SiMongodb className='group-hover:text-green-600' /> },
            { name: 'Python', icon: <FaPython className='group-hover:text-yellow-400' /> },
            { name: 'C++', icon: <TbBrandCpp className='group-hover:text-blue-400' /> },
            { name: 'C#', icon: <TbBrandCSharp className='group-hover:text-indigo-400' /> },
        ],

        tools: [
            { name: 'Git', icon: <FaGitAlt className='group-hover:text-orange-600' /> },
            { name: 'GitHub', icon: <FaGithub className='group-hover:text-gray-300' /> },
            { name: 'VS Code', icon: <VscVscodeInsiders className='group-hover:text-blue-400' /> },
            { name: 'Figma', icon: <FaFigma className='group-hover:text-pink-500' /> },
            { name: 'npm', icon: <SiNpm className='group-hover:text-red-500' /> },
            { name: 'Canva', icon: <SiCanva className='group-hover:text-sky-400' /> },
        ],
    };


    const colorClasses = {
        blue: "border-blue-500 hover:shadow-blue-500",
        green: "border-green-500 hover:shadow-green-500",
        yellow: "border-yellow-500 hover:shadow-yellow-500",
    };

    const textColorClasses = {
        blue: "text-blue-500",
        green: "text-green-500",
        yellow: "text-yellow-500",
    };

    const renderSkills = (category, color) => {
        const colorClass = colorClasses[color] || "text-white border-white";
        const textColorClass = textColorClasses[color] || "text-white";
        return (
            <div className={`group skills-category bg-white/5 backdrop-blur-[9px] rounded-xl p-6 shadow-md ${colorClass} border transition-all duration-300 hover:scale-[1.02]`}>
                <h3 className={`text-xl font-semibold mb-4 text-white border-b ${colorClass} pb-2`}>{category.title}</h3>
                <ul className="space-y-3">
                    {category.skills.map((skill, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <span className={`text-xl ${colorClass} ${textColorClass} hover:scale-125 transition-all`}>{skill.icon}</span>
                            <span className={`px-3 py-1 cursor-pointer rounded-full border ${colorClass} hover:shadow-xs text-white font-medium shadow-md`}>
                                {skill.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    };

    return (
        <motion.div
            key="projects"
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            animate={{ clipPath: "circle(200% at 50% 50%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <section className="h-[calc(100vh-4em)] p-4 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12 tracking-wide">My Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {renderSkills({ title: 'Frontend Development', skills: skillsList.frontend }, 'blue')}
                        {renderSkills({ title: 'Backend Development', skills: skillsList.backend }, 'green')}
                        {renderSkills({ title: 'Tools & Software', skills: skillsList.tools }, 'yellow')}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Skills;
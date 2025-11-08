import { useEffect, useState } from 'react'
import MyPic from '../assets/MyPic.jpg'
import Button1 from '../elements/Button';
import Icon_floating from './icon_floating';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    const navigate = useNavigate();
    const taglines = {
        1: "I am a Full stack Web developer",
        2: "I love coding and building web applications",
        3: "Welcome to my Portfolio"
    };
    const tagArray = Object.values(taglines);
    const [tagIndex, setTagIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const current = tagArray[tagIndex];

        if (isDeleting) {
            timer = setInterval(() => {
                setText((prev) => {
                    if (prev.length <= 1) {
                        setIsDeleting(false);
                        setTagIndex((prev) => (prev + 1) % tagArray.length);
                        return '';
                    }
                    return prev.slice(0, -1);
                });
            }, 30);
        } else {
            timer = setInterval(() => {
                setText((prev) => {
                    if (prev.length === current.length) {
                        setTimeout(() => {
                            setIsDeleting(true);
                        }, 100);
                        return prev;
                    }
                    return current.slice(0, prev.length + 1);
                });
            }, 100);
        }
        return () => clearInterval(timer);
    }, [tagIndex, isDeleting]);

    const btnfunc = () => {
        navigate('/projects');
    }

    return (
        <motion.div
            key="hero"
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <div className='h-[calc(100vh-4em)] flex lg:flex-row flex-col justify-around items-center lg:gap-2 gap-6 p-2'>
                <div className='fixed hidden lg:block'>
                    <Icon_floating />
                </div>
                <div className='flex flex-col justify-center items-center gap-2 md:w-[50vw] w:[80vw] text-[5vh] lg:text-[10vh] text-white font-bold z-10'>
                    <h1 className='text-center'>Muhammad Haroon Nawaz</h1>
                    <span className='text-[3vh] flex items-center text-center'>
                        {text}
                        <span className='ml-2 text-white animate-pulse'>|</span>
                    </span>
                    {/* <div className="flex space-x-4 mt-4">
                        <a href="https://github.com/haroon-90" target="_blank" className="hover:bg-yellow-300 p-3 rounded-full transition duration-300">
                            <svg className="w-[0.7em] h-[0.7em] text-[#0000ff]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/haroon_nawaz_" target='_blank' className="hover:bg-yellow-300 p-3 rounded-full transition duration-300">
                            <svg className="w-[0.7em] h-[0.7em] text-[#0000ff] " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-haroon-nawaz-206343362/" target='_blank' className="hover:bg-yellow-300 p-3 rounded-full transition duration-300">
                            <svg className="w-[0.7em] h-[0.7em] text-[#0000ff]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/haroon.nawaz.144734" target='_blank' className="hover:bg-yellow-300 p-3 rounded-full transition duration-300">
                            <svg className="w-[0.7em] h-[0.7em] text-[#0000ff]" fill="currentColor" viewBox="0 0 50 50" width="50px" height="50px" aria-hidden="true">
                                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                            </svg>
                        </a>
                    </div> */}
                </div>
                <div className='relative flex flex-col justify-center items-center gap-2 text-3xl'>
                    <div className='absolute bg-blue-500 blur-3xl lg:h-[70vh] h-[50vh] w-full rounded-full animate-pulse'></div>
                    <img className='lg:h-[60vh] h-[40vh] rounded-full z-10' src={MyPic} alt="MyPic" />
                </div>
                <Button1 className="fixed bottom-10" onClick={btnfunc}>&lt;Explore more /&gt;</Button1>
            </div>
        </motion.div>
    )
}

export default Hero

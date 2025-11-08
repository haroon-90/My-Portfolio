import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const reloadpage = () => {
    navigate('//');
    window.location.reload();
  }

  return (
    <div
      className={`fixed top-0 w-full z-50 mt-1 transition-all duration-500 border-white/10 backdrop-blur-sm border rounded-4xl`}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 h-[3em]'>

        <span
          onClick={reloadpage}
          className='cursor-pointer font-stretch-50% select-none text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300'
        >
          MHN
        </span>

        <ul className='hidden md:flex gap-8 text-lg font-medium'>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ${isActive ? "text-yellow-500" : "text-white hover:text-yellow-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item}
                    <span
                      className={`absolute left-0 -top-1 h-0.5 bg-yellow-500 transition-all duration-300 ${isActive ? "w-full shadow-[0_0_8px_2px_rgba(234,179,8,0.8)]" : "w-0"}`}
                    ></span>
                  </>
                )}
              </NavLink>

            </li>
          ))}
        </ul>

        <button
          className='md:hidden z-50 flex flex-col justify-center items-center space-y-1.5 transition-all'
          onClick={toggleMenu}
        >
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden left-0 w-full py-6 border-t border-white/10 shadow-lg`}
          >
            <ul className='flex flex-col items-center gap-6'>
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className='text-white font-bold text-lg hover:text-yellow-500 transition-colors duration-300'
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar

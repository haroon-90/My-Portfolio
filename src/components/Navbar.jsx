import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const reloadpage = () => window.location.reload()

  return (
    <div
      className={`fixed top-0 w-full z-50 mt-1 transition-all duration-500 border-white/10 backdrop-blur-sm border rounded-full`}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 h-[4em]'>

        <span
          onClick={reloadpage}
          className='cursor-pointer select-none text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300'
        >
          &lt;Portfolio /&gt;
        </span>

        {/* Desktop Links */}
        <ul className='hidden md:flex gap-8 text-lg font-medium'>
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ${
                    isActive ? 'text-blue-500' : 'text-white hover:text-blue-500'
                  }`
                }
              >
                {item}
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden z-50 flex flex-col justify-center items-center space-y-1.5 transition-all'
          onClick={toggleMenu}
        >
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden absolute top-[4em] left-0 w-full rounded-b-full py-6 bg-black/70 backdrop-blur-[5px] border-t border-white/10 shadow-lg`}
          >
            <ul className='flex flex-col items-center gap-6'>
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className='text-white text-lg hover:text-blue-500 transition-colors duration-300'
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

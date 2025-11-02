import Blured_BG from './assets/blurred_background.png'
import bg from './assets/background_img.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <div className="relative h-screen">
      {/* <motion.div
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
        exit={{ clipPath: 'circle(0% at 50% 50%)' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      > */}
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(9px)',
          zIndex: -1
        }}
      />
      {/* <AnimatePresence mode="wait"> */}
        <div className="relative z-10 flex flex-col justify-center h-full pt-[4em]">
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<Hero />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
      {/* </AnimatePresence> */}
      {/* </motion.div> */}
    </div >
  )
}

export default App

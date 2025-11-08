import bg from './assets/background_img-min.png'
import bg1 from './assets/blurred_background-min.png'
import bg2 from './assets/coding_bg2-min.png'
import bg3 from './assets/coding_bg3-min.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <div className="relative h-screen">
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          zIndex: -1
        }}
      />
      <AnimatePresence mode="wait">
        <div className="relative z-10 flex flex-col justify-center h-full pt-[4em]">
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/home' element={<Hero2 />} />
            <Route path='/About' element={<About />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
      </AnimatePresence>
    </div >
  )
}

export default App

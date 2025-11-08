import { useEffect, useRef } from 'react'
import bg1 from './assets/blurred_background-min.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero2 from './components/Hero2'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling.current) {
        console.log('Already scrolling, ignoring...');
        return;
      }

      const currentPath = location.pathname;
      console.log('Scroll detected! Current path:', currentPath);
      console.log('Scroll direction:', event.deltaY > 0 ? 'DOWN' : 'UP');

      let nextPath = null;

      if (event.deltaY > 0) {
        // Scrolling DOWN
        if (currentPath === '/' || currentPath === '/home') {
          nextPath = '/About';
        } else if (currentPath === '/About') {
          nextPath = '/Projects';
        } else if (currentPath === '/Projects') {
          nextPath = '/Skills';
        } else if (currentPath === '/Skills') {
          nextPath = '/Contact';
        }
      } else if (event.deltaY < 0) {
        // Scrolling UP
        if (currentPath === '/Contact') {
          nextPath = '/Skills';
        } else if (currentPath === '/Skills') {
          nextPath = '/Projects';
        } else if (currentPath === '/Projects') {
          nextPath = '/About';
        } else if (currentPath === '/About') {
          nextPath = '/home';
        }
      }

      if (nextPath) {
        console.log('Navigating to:', nextPath);
        isScrolling.current = true;
        navigate(nextPath);

        // 1 second ke baad phir se enable karo
        setTimeout(() => {
          isScrolling.current = false;
          console.log('Scroll enabled again');
        }, 1000);
      }
    };

    // Event listener ko { passive: false } ke saath add karo
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [navigate, location.pathname]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${bg1})`,
          filter: 'hue-rotate(20deg) brightness(0.8) blur(10px)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />
      <AnimatePresence mode="wait">
        <div className="relative z-10 flex flex-col justify-center h-full pt-[4em] pb-[1em]">
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Hero2 />} />
            <Route path='/home' element={<Hero2 />} />
            <Route path='/About' element={<About />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default App